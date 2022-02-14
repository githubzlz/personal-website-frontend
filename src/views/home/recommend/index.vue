<template>
  <div>
    <a id="recommend"></a>
    <div v-for="(item, i) in recommendBlogs" v-bind:key="i">
      <menu-title v-bind:title="item.menuTitle.title" v-bind:desc="item.menuTitle.desc"/>
      <hang-picture-blog v-bind:blogs="item.recommendBlogList" v-if="item.type === 0"/>
      <card-blog v-bind:blogs="item.recommendBlogList" v-bind:back-color="'a9dec4'" v-else-if="item.type === 1"/>
    </div>
    <menu-title v-bind:title="pageMenuTitle.title" v-bind:desc="pageMenuTitle.desc"/>
    <home-page v-bind:back-color="'eea7a7'"/>
  </div>
</template>

<script>
import HangPictureBlog from "./hang";
import MenuTitle from "../title";
import CardBlog from "./card";
import HomePage from "./page";
export default {
  name: "Recommend",
  components: {HomePage, CardBlog, MenuTitle, HangPictureBlog},
  data(){
    return{
      pageMenuTitle:{
        title:'更多文章',
        desc:'You might be an artist who would like to introduce yourself and your work here or maybe you’re a business' +
            'with a mission to describe.'
      },
      recommendBlogs:[
        {
          type:0,
          menuTitle:{
            title:'博文推荐',
            desc:'You might be an artist who would like to introduce yourself and your work here or maybe you’re a business' +
                'with a mission to describe.'
          },
          recommendBlogList: [
            {
              id: '1',
              title: 'Java知识点精讲',
              desc: 'Java知识点精讲Java知识点精讲Java知识点精讲Java知识点精讲。',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.8'
            }, {
              id: '2',
              title: 'JVM虚拟机知识大纲',
              desc: 'JVM虚拟机知识大纲，类加载机制，GC算法，JVM调优等。',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.6'
            }, {
              id: '3',
              title: 'Mysql分库分表',
              desc: 'Mysql分库分表方法，垂直分库，水平分库，垂直分表，水平分表，分库分表实践',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.8'
            }, {
              id: '4',
              title: 'Java基础知识体系',
              desc: '注解原理，集合框架，反射，代理模式，多线程等',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.6'
            },
          ],
        },{
          type:1,
          menuTitle:{
            title:'博文推荐',
            desc:'You might be an artist who would like to introduce yourself and your work here or maybe you’re a business' +
                'with a mission to describe.'
          },
          recommendBlogList: [
            {
              id: '1',
              title: 'Java知识点精讲',
              desc: 'Java知识点精讲Java知识点精讲Java知识点精讲Java知识点精讲。',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.8'
            }, {
              id: '2',
              title: 'JVM虚拟机知识大纲',
              desc: 'JVM虚拟机知识大纲，类加载机制，GC算法，JVM调优等。',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.6'
            }, {
              id: '3',
              title: 'Mysql分库分表',
              desc: 'Mysql分库分表方法，垂直分库，水平分库，垂直分表，水平分表，分库分表实践',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.8'
            }, {
              id: '4',
              title: 'Java基础知识体系',
              desc: '注解原理，集合框架，反射，代理模式，多线程等',
              imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
              imgOpacity: '0.6'
            },
          ],
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>