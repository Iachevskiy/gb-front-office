
import { init, postEvent } from "@telegram-apps/sdk-vue";

export const tgInit = () => {
  try {
    init();

    postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: false });
    postEvent("web_app_toggle_orientation_lock", { locked: true });
    postEvent("web_app_expand");
    postEvent("web_app_set_background_color", { color: "#467A2A8E" });
    postEvent("web_app_set_bottom_bar_color", { color: "#83D5BB8E" });

    // web_app_set_background_color

    // const removeListener = on("viewport_changed", (payload) => {
    //   console.log("Viewport changed:", payload);
    // });
  }
  catch (error) {
    console.warn(error);
  }

};
