<template>
  <!-- <div class="container" v-loading="loading">
    <div class="flex">
      <router-link
        class="pr10 blue"
        v-for="menu in menus"
        :to="menu.route"
        :key="menu.id"
      >{{menu.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>-->
  <div>
    <h1 class="title">daily life</h1>
    <div id="app" class="container">
      <card data-image="https://ae01.alicdn.com/kf/H2ff9a77e172a4ca0bfb6a3e808d14e66t.jpg">
        <template #header>
          <h1>Love</h1>
        </template>
        <template #content>
          <p>tianhou && wangya</p>
        </template>
      </card>
      <!-- <card
        data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Beaches</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Trees</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card>
      <card
        data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
      >
        <h1 slot="header">Lakes</h1>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </card> -->
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { queryMenus } from "@/api/home";
import { useMenusProvide, useMenusInject } from "@/context/home";
import { useAsync } from "@/hooks";
import card from "@/components/Card";
import "@/styles/reset.scss";
export default defineComponent({
  components: {
    card
  },
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

<style>
body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #bcaaa4;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
/* .container {
  margin: 10px;
} */
.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: left;
  padding-left: 80px;
}
.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}
</style>>