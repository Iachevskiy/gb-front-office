import { createApp } from "vue";
import { createPinia } from "pinia";

import i18n from "FSD/App/Providers/i18n";
import routerProvider from "FSD/App/Providers/router";

import App from "./App.vue";
import "./Providers/vant";

import "normalize.css";
import "FSD/Shared/Styles/app.scss";

const app = createApp(App);

app.use(createPinia());
app.use(routerProvider);
app.use(i18n);

app.mount("#app");
