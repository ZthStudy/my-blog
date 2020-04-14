<template>
  <div>
    <ul>
      <li v-for="menu in menus" :key="menu.id">{{menu.name}}</li>
    </ul>
  </div>
</template>

<script>
import { getMenus } from "@/api/home";
export default {
  data() {
    return {
      menus: []
    };
  },
  mounted() {
    getMenus().then(res => {
      this.menus = res.data.data;
    });
  }
};
</script>

<style>
</style>