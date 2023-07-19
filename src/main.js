import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 移除默认样式
import "normalize.css";
import "lib-flexible";
// vant
import "@/plugins/vant";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
