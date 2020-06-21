<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-15 16:03:20
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-21 18:05:03
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
import { useMyLoveProvide, useMyLoveInject } from "@/context/myLove";
import { useAsync } from "@/hooks";
import { queryTrips } from "@/api/myLove";
export default defineComponent({
  name: "myLove",
  setup() {
    useMyLoveProvide();
    const { trips, activeNames, setTrips } = useMyLoveInject();
    const loading = useAsync(async () => {
      const res = await queryTrips();
      setTrips(res.data.data);
    });
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
