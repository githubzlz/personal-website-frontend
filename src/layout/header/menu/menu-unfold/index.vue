<template>
  <div class="menu-unfold">
    <ul>
      <li class="router-title" v-for="(menu,i) in menus" v-bind:key="i">
        <router-link :to="menu.link" class="router-link">
          <div class="router-title-back"></div>
          <span style="z-index: 1">{{menu.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuUnfold",
  data(){
    return{

    }
  },
  props: {
    menus: {
      type: Array
    },
  }
}
</script>

<style scoped>
.menu-unfold{
  z-index: 999;
  position: relative;
}
.router-title {
  display: inline-block;
  margin-top: 20px;
  margin-right: 1.4rem;
}

.router-link {
  position: relative;
  text-decoration: none;
  color: white;
  font-size: 0.52rem;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 350ms;
}

.router-link:hover{
  color: #ceae60;
}
.router-link:hover .router-title-back{
  background-color: rgba(224, 210, 210, 0.15);
}

.router-title-back {
  width: 100%;
  height: 100%;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 500ms;
}

.router-link-active {
  color: #ceae60;
}
</style>