<template>
  <div
    class="uikit-button-as-card-ui-default"
    @click="handleClick"
  >
    <CellGroup inset>
      <Cell
        :title="preparedData.title"
        size="large"
        :label="preparedData.subtitle"
        center
      >
        <template #icon>
          <Suspense>
            <div
              v-if="preparedData.iconLeft"
              class="uikit-button-as-card-ui-default__icon-left-wrapper"
            >
              <IconComponent
                :icon="preparedData.iconLeft"
                size="large"
              />
            </div>
          </Suspense>
        </template>

        <template #extra>
          <!-- Отображение переключателя, если используется специальная тема -->
          <Suspense>
            <div
              v-if="preparedData.isVisibleSwitch"
              class="uikit-button-as-card-ui-default__switch-wrapper"
            >
              <SwitchComponent
                v-model="model"
                :disabled="disabled"
                size="20px"
              />
            </div>
          </Suspense>

          <!-- Отображение переключателя, если используется специальная тема -->
          <Suspense>
            <div
              v-if="preparedData.icon"
              class="uikit-button-as-card-ui-default__icon-wrapper"
            >
              <IconComponent :icon="preparedData.icon" />
            </div>
          </Suspense>
        </template>
      </Cell>
    </CellGroup>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineAsyncComponent,
  type PropType
} from "vue";
import { useI18n } from "vue-i18n";

import {
  Cell,
  CellGroup,
  showDialog
} from "vant";

import { EUIKitIcon } from "FSD/Shared/UI/Icon";

import { ButtonAsCardPresetsConfig, EButtonAsCardPreset } from "../constants";

defineOptions({ name: "UIKitButtonAsCardUIDefault" });

const props = defineProps({
  /* заголовок */
  title: {
    type   : String,
    default: ""
  },

  /* Описание */
  subtitle: {
    type   : String,
    default: ""
  },

  /* шаблон */
  preset: {
    type   : String as PropType<EButtonAsCardPreset | "">,
    default: ""
  },

  /* иконка */
  icon: {
    type   : String as PropType<EUIKitIcon | "">,
    default: ""
  },

  /* иконка */
  iconLeft: {
    type   : String as PropType<EUIKitIcon | "">,
    default: ""
  },

  /* сообщение для подтверждения */
  confirmMsg: {
    type   : String,
    default: ""
  },

  isVisibleSwitch: {
    type   : Boolean,
    default: false
  },

  /* Активна ли кнопка */
  disabled: {
    type   : Boolean,
    default: false
  }
});

const emit = defineEmits<{
  click: [],
  confirm: [],
  change: []
}>();

const model = defineModel({
  type   : Boolean,
  default: false
});

const { t: globalTranslates } = useI18n();

/* Асинхронная загрузка компонента Switch */
const SwitchComponent = defineAsyncComponent(() => import("vant/lib/switch"));

/* Асинхронная загрузка компонента Icon */
const IconComponent = defineAsyncComponent(() => import("FSD/Shared/UI/Icon/UI/default.vue"));

/* Подготовка данных для рендеринга кнопки */
const preparedData = computed(() => {
  const res = {
    title          : props.title,
    subtitle       : props.subtitle,
    confirmMsg     : props.confirmMsg,
    isVisibleSwitch: props.isVisibleSwitch,
    icon           : props.icon,
    iconLeft       : props.iconLeft
  };

  if (!props.preset || !ButtonAsCardPresetsConfig[props.preset]) {
    return res;
  }
  const config = ButtonAsCardPresetsConfig[props.preset];

  if (!res.title && config["titleKey"]) {
    res.title = globalTranslates(config["titleKey"]);
  }

  if (!res.subtitle && config["subtitleKey"]) {
    res.subtitle = globalTranslates(config["subtitleKey"]);
  }

  if (!res.confirmMsg && config["confirmKey"]) {
    res.confirmMsg = globalTranslates(`confirmation.${config["confirmKey"]}`);
  }

  if (!res.icon && config["icon"]) {
    res.icon = config["icon"];
  }

  if (!res.iconLeft && config["iconLeft"]) {
    res.iconLeft = config["iconLeft"];
  }

  return res;
});

const showPreparedDialog = () => showDialog({
  message         : preparedData.value.confirmMsg,
  showCancelButton: true
});

const handleClick = () => {
  if (preparedData.value.confirmMsg) {
    showPreparedDialog()
      .then(() => {
        emit("change");
        emit("confirm");
        model.value = !model.value;
      })
      .catch(() => {});
  }
  else {
    emit("click");
    emit("change");
    model.value = !model.value;
  }
};

</script>

<style lang="scss">
.uikit-button-as-card-ui-default {
  .van-cell {
    min-height: 68px;
  }

  .van-cell__label {
    margin-top: 0;
  }

  &__switch-wrapper, &__icon-wrapper, &__icon-left-wrapper {
    display: flex;
  }

  &__icon-left-wrapper {
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    border-radius: $radius-l;
    margin-right: $space-m;
    background: #b4b8cc24;
  }

  &__icon-wrapper {
    color: #b3b8cc;
  }

}
</style>
