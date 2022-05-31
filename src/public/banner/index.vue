<template>
  <div class="home_banner">
    <div id="banner_container">
      <div id="banner-title"></div>
      <div id="banner-subtitle">
        {{ banner.sub }}
        <br>
        <div style="margin-top: 5px">
          {{ banner.sub2 }}
        </div>
      </div>
      <div id="banner-opt" v-if="banner.button.show">
        <div v-for="(b, i) in banner.button.buttons" v-bind:key="i" style="display: inline-block">
          <div class="opt-button" v-if="b.mode === 1" v-on:click="bClick1">
            {{ b.inner }}
            <div class="arrow-right">...</div>
          </div>
          <div class="opt-button2" v-if="b.mode === 2" v-on:click="bClick2">
            {{ b.inner }}
            <div class="arrow-right">...</div>
          </div>
        </div>
      </div>
    </div>
    <a id="pageStart" style="position: absolute; bottom: 0"></a>
    <div id="window-next" style="position: absolute; left: 50%;transform: translateX(-50%);top: 120px; z-index: 999">
      <next-page></next-page>
    </div>
  </div>
</template>

<script>
import {resize} from "@/assets/js/listener";
import NextPage from "./next"

export default {
  name: "Banner",
  components: {NextPage},
  props: {
    banner: {
      type: Object
    },
    bClick1: {
      type: Function
    },
    bClick2: {
      type: Function
    }
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
    resize();
    let title = this.banner.title;
    let length = Math.floor(title.length / 3);
    let titleDom = title.slice(0, length - 1)
        + '<span style="color: #E9B44C;">'
        + title.slice(length - 1, length * 2 + 1)
        + '</span>'
        + title.slice(length * 2 + 1, title.length);
    let titleContainer = document.getElementById('banner-title');
    if (titleContainer) {
      titleContainer.innerHTML = titleDom;
    }

  }
}
</script>

<style scoped>
.home_banner {
  position: relative;
  width: 100%;
  color: white;
}

#banner_container {
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

#banner-title {
  font-size: 2.6rem;
  font-weight: bolder;
}

#banner-subtitle {
  font-family: test_zlz;
  font-size: .8rem;
  margin-top: 70px;
}

#banner-opt {
  margin-top: 40px;
}

.opt-button {
  border: 3px solid whitesmoke;
  border-radius: 2px;
  padding: 15px;
  width: 5rem;
  display: inline-block;
  font-size: 0.7rem;
  margin: 0 10px;
  transition: all 300ms;
  cursor: pointer;
  font-family: test_zlz;
}

.opt-button2 {
  border: 3px solid #E9B44C;
  background-color: #E9B44C;
  border-radius: 2px;
  padding: 15px;
  width: 5rem;
  display: inline-block;
  font-size: 0.7rem;
  margin: 0 10px;
  transition: all 400ms;
  cursor: pointer;
  font-family: test_zlz;
}

.opt-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.arrow-right {
  display: inline-block;
  margin-left: -5px;
  width: 0;
  height: 0;
  overflow: hidden;
  transition: all 300ms;
}

.opt-button:hover .arrow-right {
  overflow: visible;
  width: 20px;
}

.opt-button2:hover {
  background-color: #0f8b8d;
  border: 3px solid #0f8b8d;
}

.opt-button2:hover .arrow-right {
  overflow: visible;
  visibility: visible;
  width: 20px;
}
</style>
