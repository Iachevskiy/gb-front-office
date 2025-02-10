import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import "vant/lib/index.css";
const app = createApp(App);

import { Locale } from "vant";
import ruRU from "vant/es/locale/lang/ru-RU";

Locale.use("ru-RU", ruRU);

app.use(createPinia());
app.use(router);

app.mount("#app");
