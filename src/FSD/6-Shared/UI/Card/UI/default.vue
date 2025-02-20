<template>
  <div class="uikit-card">
    <CellGroup inset>
      <Cell
        :title="title"
        size="large"
        :label="subtitle"
        center
      >
        <template #extra>
          <slot name="extra" />
        </template>
      </Cell>

      <Cell
        v-if="isVisibleSecondRow"
        size="large"
        center
      >
        <template #title>
          <div
            v-for="detail in details"
            :key="detail.value"
            class="uikit-card__details"
          >
            <span class="uikit-card__details-label">
              {{ `${detail.label}: ` }}
            </span>
            {{ detail.value }}
          </div>
        </template>

        <template #extra>
          <slot name="additionalExtra" />
        </template>
      </Cell>
    </CellGroup>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  type PropType,
  useSlots
} from "vue";

import { Cell, CellGroup } from "vant";

type TDetailsInput = {
  label: string;
  value: string | number;
}[];

defineOptions({ name: "UIKitCardUIDefault" });

const props = defineProps({
  /* заголовок */
  title: {
    type   : String,
    default: ""
  },

  /* подзаголовок */
  subtitle: {
    type   : String,
    default: ""
  },

  /* дополнительные детали */
  details: {
    type   : Array as PropType<TDetailsInput>,
    default: () => []
  },

  /* Чекбокс активен */
  checkboxIsActive: {
    type   : Boolean,
    default: false
  }
});

const slots = useSlots();

const isVisibleSecondRow = computed(() => slots.additionalExtra || props.details.length);
</script>

<style lang="scss">
.uikit-card {
  .van-cell__label {
    margin-top: 0;
  }

  &__details {
    @include text-13-18-400;
    color: $color-text-secondary;

    &-label {
      color: $neutral80;
    }

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
