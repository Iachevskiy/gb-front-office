<template>
  <header>
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

</script>
