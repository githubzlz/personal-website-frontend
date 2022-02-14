<template>
  <div class="header">
    <div class="phone">

    </div>
    <div class="ipad">

    </div>
    <div class="pc">
      <fill-back/>
      <div id="pc-header">
        <div class="header-left">
          <title-logo></title-logo>
        </div>
        <div class="header-middle">
          <menu-unfold v-bind:menus="menus"></menu-unfold>
        </div>
      </div>
      <div id="window-next" style="position: absolute; left: 50%;transform: translateX(-50%);top: 120px; z-index: 999">
        <next-page></next-page>
      </div>
    </div>
  </div>
</template>

<script>

import FillBack from "./back";
import TitleLogo from "./logo";
import MenuUnfold from "./menu/menu-unfold";
import NextPage from "./next";

export default {
  name: "Header",
  components: { NextPage, MenuUnfold, TitleLogo, FillBack},
  data() {
    return {
      menus: [
        {title: '首页', name: 'Home', link: '/home', icon: ''},
        {title: '博文列表', name: 'List',link: '/list', icon: ''},
        {title: '时间轴', name: 'Time',link: '/timeline', icon: ''},
        {title: '关于我', name: 'About',link: '/about', icon: ''},
        {title: '文章', name: 'About',link: '/detail', icon: ''}
      ]
    }
  },
  created() {

  },
  methods: {},
  mounted() {

  },

}
</script>

<style scoped>


#pc-header {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
}

.header-left {
  float: left;
}

.header-middle {
  float: right;
}

.header-right {
  float: right;
  margin-right: 20px;
}


</style>
