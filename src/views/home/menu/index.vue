<template>
  <div class="home_menu">
    <a id="index"></a>
    <div class="nor-card">
      <div class="width-limit card page-description">
        <div class="page-description-page" v-for="(item,index) in pageList" v-bind:key="index">
          <span :class="'description-page-icon ' + item.icon"></span>
          <div class="description-page-title">{{ item.title }}</div>
          <div class="description-page-desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMenu",
  data(){
    return {
      pageList: [
        {
          icon: 'el-icon-lollipop',
          title: '博文',
          desc: '展示所有的博客文章'
        }, {
          icon: 'el-icon-collection',
          title: '技术',
          desc: '技术博客，所有的技术博客列表'
        }, {
          icon: 'el-icon-connection',
          title: '生活',
          desc: '生活琐事'
        }, {
          icon: 'el-icon-time',
          title: '时间轴',
          desc: '博客时间轴，网站大事记，我的日记。博客时间轴，网站大事记，我的日记'
        }, {
          icon: 'el-icon-data-board',
          title: '留言',
          desc: '留言'
        }, {
          icon: 'el-icon-time',
          title: '关于我',
          desc: '展示所有的博客文章'
        },
      ],
    }
  }
}
</script>

<style scoped>
.home_menu{
  margin: 20px auto;
}
.page-description {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-bottom: 50px;
}

.page-description-page {
  margin-top: 50px;
  display: inline-block;
  width: 30%;
  min-width: 210px;
}

.description-page-icon {
  font-size: 1.3rem;
  color: darkgreen;
}

.description-page-title {
  font-size: 0.7rem;
  font-weight: bolder;
  margin-top: 30px;
}

.description-page-desc {
  font-size: 0.45rem;
  margin-top: 30px;
  padding: 0 20%;
}
</style>
