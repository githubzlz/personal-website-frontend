<template>
  <div id="detail">
    <banner v-bind:banner="banner"/>
    详情
  </div>
</template>

<script>

import Banner from "../../public/banner";
export default {
  name: 'Detail',
  components: {Banner},
  data(){
    return{
      banner:{
        title :'钢铁是如何炼成的',
        sub:'钢铁',
        sub2:'testt estsetse tsetse tsset!!!',
        button: {
          show:false
        }
      }
    }
  }
}
</script>

<style>

</style>
