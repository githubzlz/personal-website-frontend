<template>
  <div class="logo">
    <div class="logo-title" style="font-size: 0.68rem; color: white; font-weight: bolder">
      <span>Run</span>
      <span style="background-color: orange">·</span>
      <span style="background-color: orange">Heart</span>
    </div>
    <div class="logo-subtitle">
      真诚热爱
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleLogo"
}
</script>

<style scoped>
.logo {
  margin-top: 20px;
  margin-left: 30px;
  padding: 5px;
  cursor: pointer;
  z-index: 999;
  position: relative;
}
.logo-subtitle {
  font-family: test_zlz;
  margin-top: 7px;
  color: white;
  font-size: 0.47rem;
  text-align: left
}
</style>