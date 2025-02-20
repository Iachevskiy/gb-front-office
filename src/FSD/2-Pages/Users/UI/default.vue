<template>
  <NavBar title="users page" />

  <pre>{{ viewport }}</pre>

  <CellGroup
    inset
    @click="show = true"
  >
    <Cell
      title="Добавить пользователя"
      size="large"
      center
    >
      <template #extra>
        <PlusSvg />
      </template>
    </Cell>
  </CellGroup>

  <CellGroup
    v-for="n in 20"
    :key="n"
    inset
  >
    <Cell
      :title="`Cell title ${n}`"
      value="Content"
      label="Description"
      size="large"
      center
    />
  </CellGroup>

  <pre>{{ usersApi.result.value }}</pre>

  <ActionSheet
    v-model:show="show"
    title="Title"
  >
    <div class="content">
      Content
    </div>
  </ActionSheet>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

import {
  ActionSheet,
  Cell, CellGroup, NavBar
} from "vant";

import PlusSvg from "@/assets/plus.svg";

import { graphql } from "FSD/Shared/Fetch/generatedTypes";
import { useFetcher } from "FSD/Shared/Fetch/useFetch.ts";
import { tgInit } from "FSD/Shared/Telegram/tgInit.ts";

defineOptions({ name: "PageUsersUIDefault" });

const show = ref(false);

const { viewport } = tgInit();

const usersApi = useFetcher(graphql(`
    query User {
      user {
        id
        firstName
        middleName
        lastName
        telegramId
        isConfirmed
        twoFactorKey
      }
    }
  `));

onMounted(() => {
  usersApi.load();
});

</script>

<style lang="scss">
.content {
  height: 600px;
}

.van-cell-group--inset {
  overflow: visible !important;
}
</style>
