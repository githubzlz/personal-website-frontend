<template>
  <div id="list">
    <banner v-bind:banner="banner"></banner>

    <div class="width-limit list_back">
      <div id="list_search">
        <list-search />
      </div>
      <div id="list_blogs">
        <div style="padding: 20px">
          <div class="list_blogs_search card">

          </div>
          <div class="list_blogs_page card">

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

export default {
  name: 'List',
  components: {ListSearch, SideBarCard, Banner},
  data() {
    return {
      types:['hot','record'],
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
      }
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
  overflow:hidden;zoom:1;
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
.list_blogs_search{
  height: 40px;
}
.list_blogs_page{
  margin-top: 20px;
  height: 500px;
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
