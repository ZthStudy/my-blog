<template>
  <div>
    <div id="app" class="container">
      <Card v-for="card in cards" :key="card.title" :data-image="card.imgSrc">
        <template #header>
          <h1>{{card.title}}</h1>
        </template>
        <template #content>
          <p>{{card.content}}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { queryCards } from "@/api/home";
import { useHomeProvide, useHomeInject } from "@/context/home";
import { useAsync } from "@/hooks";
import Card from "@/components/Card";
import "@/styles/reset.scss";
export default defineComponent({
  components: {
    Card
  },
  setup() {
    useHomeProvide();
    const { cards, setCards } = useHomeInject();
    const loading = useAsync(async () => {
      const res = await queryCards();
      setCards(res.data.data);
    });
    return { cards, loading };
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