import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
import router from "@/router";

console.log("router", router);

Vue.use(VueCompositionApi);
Vue.use(ElementUI);
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
