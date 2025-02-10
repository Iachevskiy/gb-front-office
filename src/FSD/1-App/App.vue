<template>
  <div class="common-layout">
    <header>
      <logo />

      <!--      <div class="wrapper"> -->
      <!--        <nav> -->
      <!--          <RouterLink to="/catalog"> -->
      <!--            catalog -->
      <!--          </RouterLink> -->

      <!--          <RouterLink to="/lc"> -->
      <!--            lc -->
      <!--          </RouterLink> -->
      <!--        </nav> -->
      <!--      </div> -->
    </header>

    <Calendar
      v-model:show="show"
      :round="false"
      position="right"
    />

    <main>
      <div>
        main content
        <button @click="show = true">
          show
        </button>

        <RouterView />
      </div>
    </main>

    <footer>
      <Tabbar
        v-model="active"
        :border="false"
      >
        <TabbarItem icon="home-o">
          Tab
        </TabbarItem>

        <TabbarItem icon="search">
          Tab
        </TabbarItem>

        <TabbarItem icon="friends-o">
          Tab
        </TabbarItem>

        <TabbarItem icon="setting-o">
          Tab
        </TabbarItem>
      </Tabbar>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";

import {
  Calendar, Tabbar, TabbarItem
} from "vant";

import logo from "@/assets/logo.svg";

const show = ref(false);

const active = ref(0);
</script>

<style lang="scss">
header {
  max-height: 100vh;
  line-height: 1.5;
}

.common-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
  background: white;

  main {
    flex-grow: 1;
    overflow-y: scroll;

    div {
      height: 200%;
    }
  }

  footer {
    padding-bottom: $space-xl;
    box-shadow: 0 -4px 12px 0 rgb(0 0 0 / 6%);

    .van-tabbar {
      position: relative;
    }
  }
}
</style>
