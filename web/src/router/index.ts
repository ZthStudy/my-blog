/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-04-28 10:29:13
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-15 16:40:35
 */
import Vue from "vue";
import Router from "vue-router";
import MyLove from "@/pages/MyLove/index.vue";
import Cards from "@/pages/Cards/index.vue";
Vue.use(Router);

const router = new Router({
  routes: [
    {

      path: "/",
      component: Cards,
    },
    {
      name:'myLove',
      path: "/myLove",
      component: MyLove,
    },
  ],
});

export default router;
