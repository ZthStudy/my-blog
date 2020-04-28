/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-04-28 10:29:13
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-04-28 10:36:15
 */
import Vue from "vue";
import Router from "vue-router";
import Study from "@/pages/study";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/study",
      component: Study,
    },
  ],
});

export default router;
