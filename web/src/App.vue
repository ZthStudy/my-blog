<template>
  <div class="container" v-loading="loading">
    <ul class="flex">
      <router-link
        class="pr10 blue"
        v-for="menu in menus"
        :to="menu.route"
        :key="menu.id"
      >{{menu.name}}</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { queryMenus } from "@/api/home";
import { useMenusProvide, useMenusInject } from "@/context/home";
import { useAsync } from "@/hooks";
import "@/styles/reset.scss";
export default defineComponent({
  setup() {
    useMenusProvide();
    const { menus, setMenus } = useMenusInject();
    const loading = useAsync(async () => {
      const res = await queryMenus();
      setMenus(res.data.data);
    });
    return { menus, loading };
  }
});
</script>

<style scoped>
.container {
  margin: 10px;
}
</style>>