<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {startOnresizeFun} from '@/assets/js/listener'
export default {
  name: 'App',
  components: {
  },
  mounted() {
    startOnresizeFun();
  }
}
</script>
<style>
#app{
  text-align: center;
  margin: 0;
  padding-top: 1px;
  cursor: url('./assets/cursor/to.png'), auto;
}
</style>
