import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import icon from "./directives/icon";

import VeeValidatePlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import GlobalComponents from "./includes/_global";

import "./assets/tailwind.css";
import "./assets/main.css";

import ProgessBar from "./includes/progress-bar";
import "nprogress/nprogress.css";
import "./registerServiceWorker";
ProgessBar(router);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.directive("icon", icon);
    app.use(GlobalComponents);

    app.use(VeeValidatePlugin);

    app.mount("#app");
  }
});
