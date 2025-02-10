<template>
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

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import logo from "@/assets/logo.svg";
</script>

<style lang="scss">
header {
  max-height: 100vh;
  line-height: 1.5;
}
</style>
