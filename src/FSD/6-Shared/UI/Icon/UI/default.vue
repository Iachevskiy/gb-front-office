<template>
  <!-- Отображение компонента-иконки -->
  <component
    :is="preparedIcon"
    :class="classes"
  />
</template>

<script setup lang="ts">
import {
  computed,
  defineAsyncComponent,
  type PropType
} from "vue";

import { EIcon } from "../constants";

defineOptions({ name: "UIKitIconUIDefault" });

const props = defineProps({
  icon: {
    type    : String as PropType<EIcon>,
    required: true
  },

  size: {
    type   : String as PropType<"large" | "small" | "middle">,
    default: "middle"
  }
});

/* Маппинг иконок на асинхронные компоненты */
const iconComponents = computed(() => ({
  [EIcon.edit]           : defineAsyncComponent(() => import("@/assets/edit.svg")),
  [EIcon.addUser]        : defineAsyncComponent(() => import("@/assets/addUser.svg")),
  [EIcon.plus]           : defineAsyncComponent(() => import("@/assets/plus.svg")),
  [EIcon.password]       : defineAsyncComponent(() => import("@/assets/edit.svg")),
  [EIcon.recovery]       : defineAsyncComponent(() => import("@/assets/edit.svg")),
  [EIcon.authFingerprint]: defineAsyncComponent(() => import("@/assets/edit.svg"))
}));

const preparedIcon = computed(() => iconComponents.value[props.icon]);

const classes = computed(() => {
  const res: string[] = ["uikit-icon-ui-default"];

  if (props.size === "large") {
    res.push("uikit-icon-ui-default__size-large");
  }

  if (props.size === "small") {
    res.push("uikit-icon-ui-default__size-small");
  }

  return res;
});

</script>

<style lang="scss">
.uikit-icon-ui-default {
    width: 20px;
    height: 20px;
    font-size: 20px;

  &__size-large {
    width: 26px;
    height: 26px;
    font-size: 26px;
  }
}
</style>
