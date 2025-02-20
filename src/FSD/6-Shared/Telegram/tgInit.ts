
import { onMounted, ref } from "vue";

import {
  init, on, postEvent
} from "@telegram-apps/sdk-vue";

export const tgInit = () => {

  const viewport = ref({});

  onMounted(() => {
    try {
      init();

      postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: false });
      postEvent("web_app_toggle_orientation_lock", { locked: true });
      postEvent("web_app_expand");
      postEvent("web_app_request_viewport");

      // web_app_set_background_color

      on("viewport_changed", (payload) => {
        viewport.value = payload;
      });
    }
    catch (error) {
      console.warn(error);
    }
  });

  return { viewport };

};
