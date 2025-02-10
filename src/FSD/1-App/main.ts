import { createApp } from "vue";
import { createPinia } from "pinia";

import routerProvider from "FSD/App/Providers/router";

import App from "./App.vue";
import "./Providers/vant";

const app = createApp(App);

app.use(createPinia());
app.use(routerProvider);

app.mount("#app");
