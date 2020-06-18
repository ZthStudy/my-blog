<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-15 16:03:20
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-18 13:42:08
--> 
<template>
  <div class="container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="item in trips"
        :key="item.name"
        class="panel"
        :title="item.title"
        :name="item.name"
      >
        <el-timeline>
          <el-timeline-item
            v-for="sub in item.children"
            :key="sub.sutTitle"
            timestamp="2020/5/16"
            placement="top"
          >
            <h4>{{sub.subTitle}}</h4>
            <el-carousel class="carousel" height="800px">
              <el-carousel-item
                @click.native="toBigImage(imageSrc)"
                v-for="(imageSrc,index) in sub.imageSrcs"
                :key="index"
              >
                <div class="bg" :style="{backgroundImage:`url(${imageSrc})`}"></div>
              </el-carousel-item>
            </el-carousel>
          </el-timeline-item>
        </el-timeline>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
export default defineComponent({
  name: "myLove",
  setup() {
    const activeNames = ref(["SanYa"]);
    const red = ref("red");
    const trips = ref([
      {
        name: "SanYa",
        title: "三亚-亚龙湾",
        timestamp: "2020/5/16",
        children: [
          {
            subTitle: "亚龙湾",
            imageSrcs: [
              "https://ae01.alicdn.com/kf/H2be5d3044fad446a93e7b1a9b681bd821.jpg",
              "https://ae01.alicdn.com/kf/He10b9abc64b54ca2bd38e18f00941c42s.jpg",
              "https://ae01.alicdn.com/kf/H2e384c29e12948728d5095791e0bd367r.jpg",
              "https://ae01.alicdn.com/kf/Hf6526e128cd547ffa1df5d256f0bf76dO.jpg",
              "https://ae01.alicdn.com/kf/Hb575e41188474cd39dc709fa61376b35D.jpg"
            ]
          }
        ]
      }
    ]);
    function handleChange(val) {
      console.log(val);
    }
    function toBigImage(imageSrc) {
      window.open(imageSrc);
    }
    return { activeNames, handleChange, trips, red, toBigImage };
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  margin: 0 auto;
  .panel {
    .carousel {
      width: 600px;
    }
    .bg {
      width: 600px;
      height: 800px;
      margin-bottom: 10px;
      background-size: cover;
      cursor: pointer;
    }
  }
}
</style>