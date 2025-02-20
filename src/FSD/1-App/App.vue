<template>
  <div class="common-layout">
    <main>
      <!--      <div> -->
      <RouterView />
      <!--      </div> -->
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
import { onMounted, ref } from "vue";
import { RouterView } from "vue-router";

import {
  Tabbar,
  TabbarItem
} from "vant";

import { tgInit } from "FSD/Shared/Telegram/tgInit.ts";

const active = ref(0);

onMounted(() => {
  tgInit();
});

</script>

<style lang="scss">
.common-layout {
  display: flex;
  height: 100%;
  flex-direction: column;
  background: white;

  main {
    display: flex;
    overflow: hidden scroll;
    flex-direction: column;
    flex-grow: 1;
    background: #eff2f5;
    gap: $space-m;
  }

  footer {
    padding-bottom: $space-xl;
    border-bottom: 4px solid red;
    box-shadow: 0 -4px 12px 0 rgb(0 0 0 / 6%);

    .van-tabbar {
      position: relative;
    }
  }
}
</style>
