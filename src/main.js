import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/materialdesignicons.scss";
import locale from "element-ui/lib/locale/lang/en";

Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
