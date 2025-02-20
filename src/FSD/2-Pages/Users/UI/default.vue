<template>
  <NavBar title="users page" />

  <UIKitButtonAsCard
    :preset="EButtonAsCardPreset.userToAdd"
    @click="show = true"
  />

  <UIKitCard
    title="Добавить пользователя"
    :details="details"
  >
    <template #extra>
      extra
    </template>

    <template #additionalExtra>
      additionalExtra
    </template>
  </UIKitCard>

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

import { ActionSheet, NavBar } from "vant";

import { UIKitButtonAsCard } from "FSD/Shared/UI/ButtonAsCard";
import { EButtonAsCardPreset } from "FSD/Shared/UI/ButtonAsCard/constants.ts";
import { UIKitCard } from "FSD/Shared/UI/Card";

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

const details = [
  {
    label: "Пол",
    value: "Мужской"
  },
  {
    label: "Дата рождения",
    value: "13.02.2002"
  }
];

onMounted(() => {
  usersApi.load();
});

</script>

<style lang="scss">
.content {
  height: 600px;
}
</style>
