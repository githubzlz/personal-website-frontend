<template>
  <div>
    <div class="sort_title" v-for="(item,index) in timeFiling" v-bind:key="'re'+index">
      <div class="sort_title_left">
        {{ getYearMonthDate(item.date) }}
      </div>
      <div class="sort_title_right">{{ item.num }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarRecord",
  data() {
    return {
      timeFiling: [
        {
          date: 1644829685688,
          num: 5
        },{
          date: 1641721685688,
          num: 24
        },{
          date: '更早',
          num: 180
        }
      ]
    }
  },
  methods: {
    getYearMonthDate(date) {
      if (date === null) {
        return '';
      }
      if (date === '更早') {
        return date;
      } else {
        let dt = new Date(date);
        let y = dt.getFullYear();
        let m = dt.getMonth() + 1;
        return `${y}年 ${m}月`
      }
    }
  }
}
</script>

<style scoped>
.sort_title_right{
  position: absolute;
  right: 10px;
  bottom: 10px;

}
.sort_title_left{
  line-height: 40px;
  margin-left: 10px;
  letter-spacing: 1px;
}
.sort_title:hover{
  background-color: #bdbd77;
  color: white;
}
.sort_title{
  border: 3px solid #faf8f8;
  border-radius: 5px;
  transition: color,background-color 500ms;
  cursor: pointer;
  color: rgba(0,0,0,0.5);
  position: relative;
  width: 100%;
  height: 40px;
  background-color: white;
  margin: 15px auto;
  font-size: 15px;
}
</style>