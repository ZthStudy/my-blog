<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-04-28 10:34:17
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-05-11 15:22:11
 -->
<template>
  <div class="flex">
    <div class="submenu">
      <router-link
        class="link"
        v-for="submenu in submenus"
        :key="submenu.id"
        :to="submenu.route"
      >{{submenu.name}}</router-link>
    </div>
    <router-view class="flex1"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submenus: [
        {
          id: 1,
          route: "/study/js",
          name: "js"
        },
        {
          id: 2,
          route: "/study/css",
          name: "css"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.submenu {
  width: 200px;
  .link {
    display: block;
  }
}
</style>