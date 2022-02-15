<template>
  <div class="card search_card">
    <div class="title">
      <el-icon class="el-icon-notebook-1" style="margin-right: 10px; "></el-icon>
      搜索
    </div>
    <div class="divider_self"></div>
    <el-input
        placeholder="开始搜索"
        prefix-icon="el-icon-search"
        v-model="search" clearable
        style="margin-bottom: 10px" v-on:input="findBlogs()">
    </el-input>
    <div class="hint">
      分类、标签、文章名都可以搜索哦，试一下吧~~~
    </div>
  </div>
</template>

<script>
export default {
  name: "ListSearch",
  data() {
    return {
      search: ''
    }
  },
  methods:{
    findBlogs(){
      //todo
      this.sendToParent();
    },
    sendToParent(){
      this.$emit('findFromAllBlogs',{title:this.search})
    }
  }
}
</script>

<style scoped>
.search_card {
  margin: 20px 20px 0 20px;
  padding: 14px;
  text-align: left;
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
.hint{
  font-size: 12px;
  color: rgba(0,0,0,0.5);
  line-height: 20px;
  padding: 5px;
}
</style>