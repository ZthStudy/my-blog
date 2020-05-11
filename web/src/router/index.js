/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-04-28 10:29:13
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-05-11 15:22:40
 */
import Vue from "vue";
import Router from "vue-router";
import Study from "@/pages/study";
import List from "@/pages/List";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/study",
      component: Study,
      children: [
        {
          path: "js",
          component: List,
        },
        {
          path: "css",
          component: List,
        },
      ],
    },
  ],
});

export default router;
