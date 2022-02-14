<template>
  <div class="menu_title">
    <div class="nor-card black-back">
      <div class="width-limit card page-title">
        <div style="margin: 40px; color: rgba(0,0,0,0.7); ">
          <div style="font-size: 1.2rem; font-family: 华文琥珀; display: inline-block">
            {{ title }}
            <div style="width: 110%; height: 12px; background-color: #ecca88; margin: -8px 0 0 -5px"></div>
          </div>
          <div style="font-size: .7rem; margin-top: 10px; font-family: test_zlz;">
            {{ desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuTitle",
  props: {
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.menu_title {
  text-align: left;
  margin: 20px 0;
}

.black-back {
  background-color: rgba(200, 200, 200, 0.6);
}

.nor-card {
  padding: 80px 0;
}
</style>