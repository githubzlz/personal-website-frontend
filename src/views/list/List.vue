<template>
  <div id="list">
    <banner v-bind:banner="banner"></banner>

    <div class="width-limit list_back">
      <div id="list_search">
        <list-search v-on:findFromAllBlogs="showSearchData"/>
      </div>
      <div id="list_blogs">
        <div style="padding: 20px">
          <div class="list_blogs_search card shadow">
            查找结果：
            <span style="color: #86a3c2">{{ title }}</span>
          </div>
          <div class="list_blogs_page card">
            <div v-for="(item,index) in blogs" v-bind:key="index">
              <blog-card v-bind:blog="item"/>
            </div>
            <div class="page_block">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-sizes="[10, 20, 30, 50]"
                  :page-size="10"
                  layout="jumper, prev, pager, next, sizes, total"
                  :total="blogs.length">
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
      <div id="list_bars">
        <side-bar-card v-bind:types="types"/>
      </div>
    </div>
  </div>
</template>

<script>

import Banner from "../../public/banner";
import SideBarCard from "../../public/sidebar";
import ListSearch from "@/views/list/search";
import BlogCard from "@/public/blogcard";

export default {
  name: 'List',
  components: {BlogCard, ListSearch, SideBarCard, Banner},
  data() {
    return {
      types: ['hot', 'record'],
      title: '所有文章',
      data: [{
        'title': '二级1',
        subData: [{}, {}]
      }, {
        'title': '二级2',
      }, {
        'title': '二级2',
      }],
      banner: {
        title: '博文列表',
        sub2: '此处集合了所有的文章，快看看有没有想要的吧~~~',
        button: {
          show: false
        }
      },
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
  },
  methods: {
    showSearchData(data) {
      this.title = data.title;
    },
    handleSizeChange() {

    },
    handleCurrentChange() {

    },
    currentPage4() {

    }
  },
  mounted() {
  }
}
</script>

<style>
.list_back {
  border: 1px dotted seagreen;
  border-radius: 30px;
  margin-top: 80px;
  overflow: hidden;
  zoom: 1;
}

#list_bars {
  display: inline-block;
  width: 33%;
  vertical-align: top;
  float: left;
}

#list_search {
  display: inline-block;
  width: 33%;
  vertical-align: top;
  float: left;
}

#list_blogs {
  display: inline-block;
  width: 67%;
  float: right;
}

.list_blogs_search {
  text-align: left;
  padding: 10px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bolder;
}

.list_blogs_page {
  margin-top: 20px;
  padding: 20px 0;
}
.page_block{
  margin-top: 30px;
}
@media only screen and (max-width: 750px) {
  #list_blogs {
    width: 100%;
  }

  #list_bars {
    width: 100%;
  }

  #list_search {
    width: 100%;
  }
}
</style>
