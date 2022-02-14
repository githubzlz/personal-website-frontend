<template>
  <div class="next-page">
    <div class="arrow-down" v-on:click="downClick()" :id="randClassName">
      <span class="el-icon-arrow-down"></span>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "NextPage",
  data() {
    return {
      randClassName: ''
    }
  },
  methods: {
    /**
     * 向下箭头的动画
     */
    downAnimate() {
      const div = $("#" + this.randClassName);
      startAnimation();

      function startAnimation() {
        div.animate({marginTop: 0}, "normal");
        div.animate({marginTop: 30}, "normal");
        div.animate({marginTop: 0}, "slow", startAnimation);
      }
    },
    downClick() {
      let ht = $('html:first');
      // 滑动到index处
      let scrollToContainer = $('#pageStart');
      console.log(scrollToContainer.offset())
      let d = scrollToContainer.offset().top * 1.08;
      ht.animate({
        scrollTop: d
      },(d - 60))
      // // 滑动到指定位置
      // ht.animate({
      //   scrollTop: d
      // }, (d - 60) * 0.9, () => {
      //   // 向上滚动一下将导航显示出来
      //   ht.scrollTop(d - 80)
      // });
    }
  },
  created() {
    this.randClassName = Math.round(Math.random() * 10000000)
  },
  mounted() {
    this.downAnimate();
  }
}
</script>

<style scoped>
.next-page{
  border: 1px solid rgba(0,0,0,0);
  width: 80px;
  height: 80px;
  position: relative;
}
.arrow-down {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  z-index: 999;
}
</style>
