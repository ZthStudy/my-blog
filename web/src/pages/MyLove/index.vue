<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-15 16:03:20
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-19 14:24:50
--> 
<template>
  <div class="mylove-container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        v-for="item in trips"
        :key="item.name"
        class="mylove-panel"
        :title="item.title"
        :name="item.name"
      >
        <el-timeline class="timeline">
          <el-timeline-item
            v-for="sub in item.children"
            :key="sub.sutTitle"
            :timestamp="sub.timestamp"
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
    const activeNames = ref([]);
    const red = ref("red");
    const trips = ref([
      {
        name: "SanYa",
        title: "三亚-亚龙湾",
        children: [
          {
            subTitle: "亚龙湾",
            timestamp: "2020/5/16",
            imageSrcs: [
              "https://ae01.alicdn.com/kf/H2be5d3044fad446a93e7b1a9b681bd821.jpg",
              "https://ae01.alicdn.com/kf/He10b9abc64b54ca2bd38e18f00941c42s.jpg",
              "https://ae01.alicdn.com/kf/H2e384c29e12948728d5095791e0bd367r.jpg",
              "https://ae01.alicdn.com/kf/Hf6526e128cd547ffa1df5d256f0bf76dO.jpg",
              "https://ae01.alicdn.com/kf/Hb575e41188474cd39dc709fa61376b35D.jpg"
            ]
          },
          {
            subTitle: "天堂森林公园",
            timestamp: "2020/5/17",
            imageSrcs: [
              "https://ae01.alicdn.com/kf/H7da3974145d7460f8d662d9357cd3f05e.jpg",
              "https://ae01.alicdn.com/kf/Hc75435a5579140c58fd827c2e8b51e14T.jpg",
              "https://ae01.alicdn.com/kf/H9c6eb9d9f8cc460da6ad63e88da034eeX.jpg",
              "https://ae01.alicdn.com/kf/Hf0c18ce6f1b944708189549d39e459edD.jpg",
              "https://ae01.alicdn.com/kf/H2fa57aca8c3b4c949a3c73a6692ceb2av.jpg",
              "https://ae01.alicdn.com/kf/H6a996f05bcce43209ff33fb4bfa76705D.jpg",
              "https://ae01.alicdn.com/kf/H026df1abc3274aa88def00c2fd96474cq.jpg",
              "https://ae01.alicdn.com/kf/Hf2cd1728a0b1478899e0d9f0755b949aP.jpg",
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

<style lang="scss">
.mylove-container {
  width: 800px;
  margin: 0 auto;
  .mylove-panel {
    .carousel {
      width: 600px;
    }
    .timeline,
    .el-collapse-item__header {
      padding: 0 10px;
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
