import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
