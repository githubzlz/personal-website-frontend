<template>
  <div id="back">
    <img id="img-back" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp05%2F1910020Z64a922-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645859505&t=f0a88403306e8b1834d21588bf6d2208"
         alt="图片不见了">
  </div>
</template>

<script>
export default {
  name: "FillBack"
}
</script>

<style scoped>
#back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #08415c 0%, #1c110a 105%);
}
#img-back {
  width: 100%;
  height: 100%;
  opacity: 0.4;
}
</style>
