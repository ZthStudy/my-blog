<template>
  <div>
    <audio id="audio" src="./assets/audio/home.mp3" loop autoplay></audio>
    <router-view></router-view>
  </div>
</template>

<script>
import "@/styles/reset.scss";
import { defineComponent, onMounted } from "@vue/composition-api";
export default defineComponent({
  setup() {
    onMounted(() => {
      window.addEventListener("click", () => {
        document.getElementById("audio").play();
      });
    });
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