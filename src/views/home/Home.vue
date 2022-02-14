<template>
  <div class="home">
    <banner v-bind:banner="banner" :bClick1="seeMore" :bClick2="readMore"/>
    <home-menu/>
    <a id="startBlogs"></a>
    <recommend/>
  </div>
</template>

<script>
import HomeMenu from "./menu";
import Recommend from "./recommend";
import Banner from "../../public/banner";
import $ from 'jquery';

export default {
  name: "Home",
  components: {Banner, Recommend, HomeMenu},
  data() {
    return {
      banner: {
        title: 'Run·Heart',
        sub: '真诚热爱',
        sub2: 'Keep loving，Keep moving!!!',
        button: {
          show: true,
          buttons: [
            {
              inner: 'See more',
              mode: 1
            },
            {
              inner: 'Read more',
              mode: 2
            }
          ]
        }
      }
    }
  },
  methods: {
    seeMore() {
      let ht = $('html:first');
      // 滑动到index处
      let scrollToContainer = $('#startBlogs');
      console.log(scrollToContainer.offset())
      let d = scrollToContainer.offset().top * 1.08;
      ht.animate({
        scrollTop: d
      }, (d - 60) * 0.8, () => {
        // 向上滚动一下将导航显示出来
        ht.animate({
          scrollTop: d -80
        }, 50)
      });
    },
    readMore() {
      this.$router.push('/list')
    }
  }
}
</script>

<style scoped>
.home {
  position: relative;
}
</style>
