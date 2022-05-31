<template>
  <div class="card page_card_card">
    <div class="page_card_image">
      <img style="width: 100%; height: 100%" :src="blog.imgSrc">
    </div>
    <div class="page_card_info">
      <div class="page_card_info_title ellipsis">
        {{ blog.title }}
      </div>
      <div class="page_card_info_desc ellipsis" style="-webkit-line-clamp: 3;">
        {{ blog.desc }}
      </div>
      <div class="page_card_info_op">
        <div class="read_more_op">
          ReadMore...
        </div>
      </div>
      <div class="page_card_info_other">
        <div class="page_card_info_other_read inline">
          <span class="el-icon-collection"></span>
          {{ blog.read }}
        </div>
        <div class="page_card_info_other_like inline">
          <span class="el-icon-lollipop"></span>
          {{ blog.like }}
        </div>
        <div class="page_card_info_other_time inline">
          <span class="el-icon-time"></span>
          {{ blog.lastUpdateTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object
    }
  }
}
</script>

<style scoped>
.page_card_card {
  position: relative;
  width: 85%;
  height: 160px;
  min-width: 200px;
  margin: 20px auto 0 auto;
  overflow: visible;
  transition: all 300ms;
  border-radius: 20px;
}

.page_card_image {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  height: 100%;
  width: 35%;
  overflow: hidden;
}

.page_card_info {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  overflow: hidden;
  text-align: left;
}

.page_card_info_title {
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
}

.page_card_info_desc {
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
}
.page_card_info_op{
  position: absolute;
  bottom: 40px;
  left: 20px;
}
.page_card_info_other{
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
}
.page_card_info_other_read{

}
.page_card_info_other_like{
  margin-left: 10px;
}
.page_card_info_other_time{
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>