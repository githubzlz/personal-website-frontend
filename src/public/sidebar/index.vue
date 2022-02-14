<template>
  <div>
    <div class="card side_bar_card shadow" style="padding: 14px; text-align: left" v-for="(type,i) in types"
         v-bind:key="i">
      <div class="title" v-if="type==='hot'">
        <el-icon class="el-icon-notebook-1" style="margin-right: 10px; "></el-icon>
        热门板块
      </div>
      <div class="title" v-if="type==='record'">
        <el-icon class="el-icon-notebook-2" style="margin-right: 10px; "></el-icon>
        归档
      </div>

      <div class="divider_self"></div>

      <side-bar-hot v-if="type==='hot'"/>
      <side-bar-record v-if="type==='record'"/>
    </div>
  </div>
</template>

<script>
import SideBarHot from "@/public/sidebar/hot";
import SideBarRecord from "@/public/sidebar/record";

export default {
  name: "SideBarCard",
  components: {SideBarRecord, SideBarHot},
  props: {
    types: {
      type: Array
    }
  }
}
</script>

<style scoped>
.side_bar_card {
  margin: 20px 20px 40px 20px;
}

.title {
  font-family: 华文彩云;
  font-size: 20px;
  padding: 5px 5px 5px 0;
}

.divider_self {
  background-color: #58ad66;
  width: 40%;
  height: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  transition: width 800ms;
}

.card:hover .divider_self {
  width: 100%;
}
</style>
