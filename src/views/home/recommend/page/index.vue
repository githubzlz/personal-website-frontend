<template>
  <div class="recommend">
    <div class="nor-card">
      <div class="recommend-blog" style="display: block; padding: 1px;">
        <div class="recommend-blog-back" :style="'background-color: #'+backColor"></div>
        <div v-for="(item,index) in blogs" v-bind:key="index">
          <blog-card v-bind:blog="item"/>
        </div>
        <a class="read_more_op_down" style="font-size: 35px;">
          more...
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "@/public/blogcard";
export default {
  name: "HomePage",
  components: {BlogCard},
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

</style>