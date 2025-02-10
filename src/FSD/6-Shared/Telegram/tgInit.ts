import { onMounted } from "vue";

import { init, postEvent } from "@telegram-apps/sdk-vue";

export default () => {
  onMounted(() => {
    init();

    // postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: true });
    postEvent("web_app_toggle_orientation_lock", { locked: true });
    postEvent("web_app_expand");

  });
};
