<template>
  <div id="detail">
    <banner v-bind:banner="banner"/>
    <div class="width-limit detail_back">
      <div id="detail_blogs">
        <div class="card detail-blog" style="margin-top: 20px">
          <div class="detail-blog-title">
            <el-tag v-if="blog.provenance === 0" type="success">原创</el-tag>
            <el-tag v-if="blog.provenance === 1" type="warning">转载</el-tag>
            <el-tag v-if="blog.provenance === 2" type="danger">翻译</el-tag>
            <div style="float: right; cursor: pointer">
              <el-button-group>
                <el-button plain v-on:click="copyLink()" size="mini">分享链接</el-button>
                <el-button plain v-on:click="copyLink('md')" size="mini">MD链接</el-button>
              </el-button-group>
            </div>
            <div class="title">&nbsp;&nbsp;&nbsp;
              {{ blog.title }}
            </div>
            <div class="line-title"></div>
            <div class="detail-blog-info">
              <el-icon class="el-icon-user" style="margin-right: 5px; margin-left: 10px;"></el-icon>
              {{ blog.author }}
              <el-icon class="el-icon-reading" style="margin-right: 5px; margin-left: 10px;"></el-icon>
              {{ blog.blogPublicInfos.readings }}
              <el-icon class="el-icon-star-off" style="margin-right: 5px; margin-left: 10px;"></el-icon>
              {{ blog.blogPublicInfos.goods }}
              <el-icon class="el-icon-time" style="margin-right: 5px; margin-left: 10px;"></el-icon>
              {{ getDate(blog.createdTime) }}
            </div>
          </div>
          <div id="detail-blog-body">
            <div id="test-editormd-view">
              <textarea style="display:none;" name="test-editormd-markdown-doc"></textarea>
            </div>
          </div>
          <div class="detail-blog-footer">
            <div style="display: inline-block" v-on:click="clickGoodM">
              <transition name="el-fade-in-linear">
                <el-icon class="el-icon-star-off"
                         style="margin-right: 5px; margin-left: 10px; cursor: pointer"
                         v-if="!clickGood"/>
              </transition>
              <transition name="el-fade-in-linear">
                <el-icon class="el-icon-star-on"
                         style="margin-right: 5px; margin-left: 10px; cursor: pointer;color: rgba(199,193,23,0.88); font-size: 20px"
                         v-if="clickGood"/>
              </transition>
            </div>
            <a style="cursor: pointer" v-on:click="clickGoodM"><span style="margin-right: 10px">点赞</span></a>
            <a><span style="cursor: pointer" v-on:click="copyLink()">
                <el-icon class="el-icon-share"></el-icon>
                分享
              </span></a>
            <a><span style="cursor: pointer; margin-left: 5px">
                <el-icon class="el-icon-warning-outline"></el-icon>
                举报
              </span></a>
          </div>
        </div>
      </div>
      <div id="detail_bars">
        <side-bar-card v-bind:types=" ['hot', 'record']"/>
      </div>
    </div>
  </div>
</template>

<script>

import Banner from "../../public/banner";
import SideBarCard from "../../public/sidebar";

export default {
  name: 'Detail',
  components: {Banner, SideBarCard},
  data() {
    return {
      blog: {
        provenance: 0,
        title: '钢铁是如何炼成的',
        author: 'zlz',
        blogPublicInfos: {
          readings: 234,
          goods: 23
        },
        createdTime: 1644846525000
      },
      banner: {
        title: '钢铁是如何炼成的',
        sub: '钢铁',
        sub2: 'testt estsetse tsetse tsset!!!',
        button: {
          show: false
        }
      }
    }
  },
  methods: {
    clickGood() {

    },
    clickGoodM() {

    },
    copyLink() {

    },
    getDate(date) {
      if (date === undefined) {
        return 0;
      }
      let dt = new Date(date);
      let y = dt.getFullYear();
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      let h = dt.getHours();
      let mi = dt.getMinutes().toString();
      if (mi.toString().length === 1) {
        mi = '0' + mi;
      }
      return `${y}/${m}/${d} ${h}:${mi}`
    },
    setBlog(){
      window.editormd.markdownToHTML("test-editormd-view", {
        markdown        : '## 测试 \n' +
            '**asddasd**\n',//+ "\r\n" + $("#append-test").text(),
        //htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
        htmlDecode      : "style,script,iframe",  // you can filter tags decode
        toc             : true,
        tocm            : true,    // Using [TOCM]
        tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
        //gfm             : false,
        //tocDropdown     : true,
        markdownSourceCode : false, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
        emoji           : true,
        taskList        : true,
        tex             : true,  // 默认不解析
        flowChart       : true,  // 默认不解析
        sequenceDiagram : true,  // 默认不解析
      });
    }
  },
  mounted() {
    this.setBlog()
  }
}
</script>

<style>
.detail_back {
  border: 1px dotted seagreen;
  border-radius: 30px;
  margin-top: 80px;
  overflow: hidden;
  zoom: 1;
}

#detail_blogs {
  display: inline-block;
  width: 67%;
  float: right;
}

#detail_bars {
  display: inline-block;
  width: 33%;
  vertical-align: top;
  float: left;
}

.detail-blog-title {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #ffffff;
  position: relative;
  text-align: left;
  font-size: 23px;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  padding: 10px;
  padding-bottom: 0;
}

.title {
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 30px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
}

.line-title {
  bottom: 35px;
  height: 1px;
  background-color: rosybrown;
  margin: 5px;
  margin-bottom: 8px;
}

.detail-blog-info {
  overflow: hidden;
  height: 25px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
}

#detail-blog-body {
  padding: 20px;
  margin-top: 5px;
  background-color: #ffffff;
}

.detail-blog-footer {
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 5px;
  height: 38px;
  line-height: 38px;
  font-size: 16px;
}

@media only screen and (max-width: 750px) {
  #detail_blogs {
    width: 100%;
  }

  #detail_bars {
    width: 100%;
  }

  #detail_search {
    width: 100%;
  }
}
</style>
