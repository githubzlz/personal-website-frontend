<template>
  <div class="card_blog">
    <div class="nor-card">
      <div class="recommend-blog" style="padding-top: 50px">
        <div class="recommend-blog-back" :style="'background-color: #'+backColor+';top:0'"></div>
        <div class="card hot-blog" v-for="(item,index) in blogs" v-bind:key="index">
          <div class="hot-blog-back"></div>
          <img class="hot-img-back" :src="item.imgSrc" :style="'opacity: ' + item.imgOpacity">
          <div class="blog-hot-title ellipsis">
            {{ item.title }}
            <div style="height: 10px; width: 110%; background-color: #01a252; margin-top: -10px"></div>
          </div>
          <div class="hot-blog-hidden">
            <div class="hot-blog-desc ellipsis">
              {{ item.desc }}
            </div>
            <div class="hot-blog-opt">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBlog",
  props: {
    blogs: {
      type: Array
    },
    backColor: {
      type: String,
      default: 'a9dec4'
    }
  }
}
</script>

<style scoped>
.hot-blog {
  z-index: 1;
  height: 300px;
  flex: auto;
  width: 30%;
  min-width: 220px;
  position: relative;
  overflow: hidden
}

.hot-blog-back {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #3c4f58 105%, #bd794e 0%);
}

.hot-img-back {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.blog-hot-title {
  color: white;
  position: absolute;
  left: 20px;
  bottom: 30px;
  transition: bottom 350ms;
  font-size: .8rem;
}

.hot-blog-hidden {
  text-align: left;
  color: white;
  width: 80%;
  position: absolute;
  left: 20px;
  bottom: -60px;
  font-size: .5rem;
  overflow: hidden;
  transition: bottom 350ms;
}

.hot-blog-desc {
  overflow: hidden;
}

.hot-blog-opt {
  margin-top: 10px;
  color: #E9B44C;
  font-size: 15px;
  cursor: pointer;
}

.hot-blog:hover .blog-hot-title {
  bottom: 100px;
}

.hot-blog:hover .hot-blog-hidden {
  bottom: 30px;
}

.hot-blog-opt:hover {
  color: #b9ca4a;
}
</style>