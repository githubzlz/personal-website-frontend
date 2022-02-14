<template>
  <div class="recommend">
    <div class="nor-card">
      <div class="recommend-blog">
        <div class="recommend-blog-back" :style="'background-color: #'+backColor"></div>
        <div class="card recommend-blog-card" v-for="(item,index) in blogs" v-bind:key="index">
          <div :class="'tag-icon tag-icon-' + index%2"></div>
          <img style="width: 100%; height: 50%"
               :src="item.imgSrc">
          <div class="recommend-blog-card-title" style="">
            {{ item.title }}
          </div>
          <div class="recommend-blog-card-desc" style="">
            {{ item.desc }}
          </div>
          <div class="recommend-blog-card-opt">
            Read More
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HangPictureBlog",
  props: {
    blogs: {
      type: Array
    },
    backColor: {
      type: String,
      default: 'f8deac'
    }
  }
}
</script>

<style scoped>

.recommend-blog-card {
  position: relative;
  display: inline-block;
  background-color: white;
  width: 290px;
  height: 370px;
  min-width: 200px;
  margin: 50px 20px 20px 0;
  overflow: visible;
  transition: all 300ms;
}

.recommend-blog-card:hover {
  margin-top: 43px;
}

.recommend-blog-card-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-family: 华文彩云;
  font-size: 20px;
  margin-top: 15px;
  padding: 0 20px
}

.recommend-blog-card-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-indent: 20px;
  line-height: 23px;
  letter-spacing: 0.5px;
  font-size: 14px;
  margin-top: 15px;
  padding: 0 10px;
  text-align: left;
}

.recommend-blog-card-opt {
  position: absolute;
  font-size: 22px;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-family: test_zlz;
  color: #E9B44C;
  transition: color 350ms;
  cursor: pointer;
}

.recommend-blog-card-opt:hover {
  color: #5d9adb;
}

.tag-icon {
  width: 100px;
  height: 13px;
  background-color: rgba(234, 186, 91, 0.5);
  position: absolute;
  left: 50%;
  top: -6px;
}

.tag-icon-0 {
  transform: translateX(-50%) rotateZ(3deg);
}

.tag-icon-1 {
  transform: translateX(-50%) rotateZ(-3deg);
}

@media only screen and (max-width: 320px) {
  .recommend-blog {
    justify-content: center !important;
  }
}

@media only screen and (max-width: 640px) {
  .recommend-blog {
    justify-content: center !important;
  }
}

@media only screen and (max-width: 750px) {
  .recommend-blog {
    justify-content: center !important;
  }
}

@media only screen and (max-width: 1242px) {
  .recommend-blog {
    justify-content: center !important;
  }
}
</style>