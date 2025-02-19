<template>
  <NavBar title="users page" />

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
    inset
    title="Group 1"
  >
    <Cell
      title="Cell title"
      value="Content"
      size="large"
      center
    />

    <Cell
      title="Cell title"
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

defineOptions({ name: "PageUsersUIDefault" });

const show = ref(false);

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
</style>
