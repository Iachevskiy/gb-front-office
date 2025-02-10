<template>
  <div class="common-layout">
    <header>
      <logo />

      <div class="wrapper">
        <nav>
          <RouterLink to="/catalog">
            catalog
          </RouterLink>

          <RouterLink to="/lc">
            lc
          </RouterLink>
        </nav>
      </div>
    </header>

    <Calendar
      v-model:show="show"
      :round="false"
      position="right"
    />

    <button @click="show = true">
      show
    </button>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import { Calendar } from "vant";

import logo from "@/assets/logo.svg";

const show = ref(false);
</script>

<style lang="scss">
header {
  max-height: 100vh;
  line-height: 1.5;
}

.common-layout {
  background: aliceblue;
}
</style>
