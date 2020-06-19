<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-15 16:03:20
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-19 16:20:56
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
            <el-carousel class="carousel" height="1075px">
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
    const trips = ref([
      {
        name: "SanYa",
        title: "三亚-亚龙湾",
        children: [
          {
            subTitle: "亚龙湾",
            timestamp: "2020/5/16",
            imageSrcs: [
              "https://s1.ax1x.com/2020/06/19/NKQ3Jf.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQtyQ.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQYQg.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQ8W8.jpg",
              "https://s1.ax1x.com/2020/06/19/NKQJSS.jpg"
            ]
          },
          {
            subTitle: "天堂森林公园",
            timestamp: "2020/5/17",
            imageSrcs: [
              "https://s1.ax1x.com/2020/06/19/NKnZHx.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnPCF.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnFgJ.jpg",
              "https://s1.ax1x.com/2020/06/19/NKn94U.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnEuR.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnVD1.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnu4O.jpg",
              "https://s1.ax1x.com/2020/06/19/NKnmE6.jpg",
              "https://s1.ax1x.com/2020/06/19/NKu7lQ.jpg",
              "https://s1.ax1x.com/2020/06/19/NKuHyj.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1FgO.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1PC6.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1EKe.jpg",
              "https://s1.ax1x.com/2020/06/19/NK1i8K.jpg"
            ]
          },
          {
            subTitle: "蜈支洲岛",
            timestamp: "2020/5/18",
            imageSrcs: [
              "https://s1.ax1x.com/2020/06/19/NK3eQU.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3VzT.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3ion.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3AJ0.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3kiq.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3nL4.jpg",
              "https://s1.ax1x.com/2020/06/19/NK3myF.jpg"
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
    return { activeNames, handleChange, trips, toBigImage };
  }
});
</script>

<style lang="scss">
.mylove-container {
  width: 900px;
  margin: 0 auto;
  .mylove-panel {
    .carousel {
      width: 800px;
    }
    .timeline,
    .el-collapse-item__header {
      padding: 0 10px;
    }
    .bg {
      width: 800px;
      height: 1075px;
      margin-bottom: 10px;
      background-size: cover;
      cursor: pointer;
    }
  }
}
</style>
