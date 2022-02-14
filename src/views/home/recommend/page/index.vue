<template>
  <div class="recommend">
    <div class="nor-card">
      <div class="recommend-blog" style="display: block; padding: 1px;">
        <div class="recommend-blog-back" :style="'background-color: #'+backColor"></div>
        <div class="card home_page_card" v-for="(item,index) in blogs" v-bind:key="index">
          <div class="home_page_image">
            <img style="width: 100%; height: 100%" :src="item.imgSrc">
          </div>
          <div class="home_page_info">
            <div class="home_page_info_title ellipsis">
              {{ item.title }}
            </div>
            <div class="home_page_info_desc ellipsis" style="-webkit-line-clamp: 3;">
              {{ item.desc }}
            </div>
            <div class="home_page_info_op">
              <div class="read_more_op">
                ReadMore...
              </div>
            </div>
            <div class="home_page_info_other">
              <div class="home_page_info_other_read inline">
                <span class="el-icon-collection"></span>
                {{ item.read }}
              </div>
              <div class="home_page_info_other_like inline">
                <span class="el-icon-lollipop"></span>
                {{ item.like }}
              </div>
              <div class="home_page_info_other_time inline">
                <span class="el-icon-time"></span>
                {{ item.lastUpdateTime }}
              </div>
            </div>
          </div>
        </div>
        <a class="read_more_op_down" style="font-size: 35px;">
          more...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    backColor: {
      type: String,
      default: 'f8deac'
    }
  },
  data() {
    return {
      blogs: [
        {
          id: '1',
          title: 'Java知识点精讲',
          desc: 'Java知识点精讲Java知识点精讲Java知识点精讲Java知识点精讲。',
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          imgOpacity: '0.8',
          lastUpdateTime: '2021-10-02 21:56:51',
          read: 1233,
          like: 23,
        }, {
          id: '2',
          title: 'JVM虚拟机知识大纲',
          desc: 'JVM虚拟机知识大纲，类加载机制，GC算法，JVM调优等。',
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          imgOpacity: '0.6',
          lastUpdateTime: '2021-10-02 21:56:51',
          read: 1233,
          like: 23,
        }, {
          id: '3',
          title: 'Mysql分库分表',
          desc: 'Mysql分库分表方法，垂直分库，水平分库，垂直分表，水平分表，分库分表实践',
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          imgOpacity: '0.8',
          lastUpdateTime: '2021-10-02 21:56:51',
          read: 1233,
          like: 23,
        }, {
          id: '4',
          title: 'Java基础知识体系',
          desc: '注解原理，集合框架，反射，代理模式，多线程等',
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          imgOpacity: '0.6',
          lastUpdateTime: '2021-10-02 21:56:51',
          read: 1233,
          like: 23,
        },
      ],
    }
  }
}
</script>

<style scoped>
.home_page_card {
  position: relative;
  width: 85%;
  height: 180px;
  min-width: 200px;
  margin: 20px auto 0 auto;
  overflow: visible;
  transition: all 300ms;
}

.home_page_image {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  height: 100%;
  width: 35%;
  overflow: hidden;
}

.home_page_info {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  overflow: hidden;
  text-align: left;
}

.home_page_info_title {
  font-size: 20px;
  margin-top: 20px;
  margin-left: 20px;
}

.home_page_info_desc {
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
}
.home_page_info_op{
  position: absolute;
  bottom: 40px;
  left: 20px;
}
.home_page_info_other{
  font-size: 14px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: calc(100% - 20px);
}
.home_page_info_other_read{

}
.home_page_info_other_like{
  margin-left: 10px;
}
.home_page_info_other_time{
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>