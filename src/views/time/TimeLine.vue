<template>
  <div>
    <banner v-bind:banner="banner"/>
    <div class="width-limit time-body">
      <div class="month-card" v-for="month in blogs" v-bind:key="month.title">
        <div class="month-card-title">
          {{month.title}}
        </div>
        <ul v-for="blog in month.data" v-bind:key="blog.title">
          <li class="blog-title-src">{{blog.date}}-{{blog.title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/public/banner'

export default {
  name: "TimeShaft",
  components: {Banner},
  data() {
    return {
      wordOut: {
        output: '',
        input: '自2020年1月12日，386天。共132篇博客，平均每三天一篇。',
        speed: 100,
        disSpeed: 30,
        reAppendIndex: 0,
        cursor: '|'
      },
      banner: {
        title: '网站的时间轴',
        sub: '',
        sub2: '自2020年1月12日，386天。共132篇博客，平均每三天一篇。',
        button: {
          show: false
        }
      },
      totalBlog: 20,
      operate: '没有更多啦！',
      upToShow: false,
      scrollIndex: 0,
      param: {
        pageInfo: {
          pageSize: 10,
          pageNum: 1
        }
      },
      blogs: [
        {
          title: '二O️二二年一月',
          data: [
            {title: "测试名称", date: '1月5日'},
            {title: "测试名称", date: '1月6日'},
            {title: "测试名称", date: '1月7日'},
            {title: "测试名称", date: '1月8日'}
          ]
        }, {
          title: '二O️二二年二月',
          data: [
            {title: "测试名称", date: '2021/02/05'},
            {title: "测试名称", date: '2021/02/06'},
            {title: "测试名称", date: '2021/02/07'},
            {title: "测试名称", date: '2021/02/08'}
          ]
        }, {
          title: '二O️二二年三月',
          data: [
            {title: "测试名称", date: '2021/03/05'},
            {title: "测试名称", date: '2021/03/06'},
            {title: "测试名称", date: '2021/03/07'},
            {title: "测试名称", date: '2021/03/08'},
            {title: "测试名称", date: '2021/03/05'},
            {title: "测试名称", date: '2021/03/06'},
            {title: "测试名称", date: '2021/03/07'},
            {title: "测试名称", date: '2021/03/08'},
            {title: "测试名称", date: '2021/03/05'},
            {title: "测试名称", date: '2021/03/06'},
            {title: "测试名称", date: '2021/03/07'},
            {title: "测试名称", date: '2021/03/08'},
            {title: "测试名称", date: '2021/03/05'},
            {title: "测试名称", date: '2021/03/06'},
            {title: "测试名称", date: '2021/03/07'},
            {title: "测试名称", date: '2021/03/08'}
          ]
        }, {
          title: '二O️二二年四月',
          data: [
            {title: "测试名称", date: '2021/02/05'},
            {title: "测试名称", date: '2021/02/06'},
            {title: "测试名称", date: '2021/02/07'},
            {title: "测试名称", date: '2021/02/08'}
          ]
        }, {
          title: '二O️二二年五月',
          data: [
            {title: "测试名称", date: '2021/05/05'},
            {title: "测试名称", date: '2021/05/06'},
            {title: "测试名称", date: '2021/05/07'},
            {title: "测试名称", date: '2021/05/08'}
          ]
        }
      ]
    }
  },
  methods: {
    toDetail(blogId) {
      this.$router.push({name: 'detail', params: {id: blogId}})
    },
    setTitle() {
      const startTime = new Date('2020/08/01');
      const endTime = new Date(1644846525000);
      let y = startTime.getFullYear();
      let m = startTime.getMonth() + 1;
      let d = startTime.getDate();
      let y1 = endTime.getFullYear();
      let m1 = endTime.getMonth() + 1;
      let d1 = endTime.getDate();
      const date = (y1 - y) * 365 + (m1 - m) * 30 + d1 - d;
      const cov = Math.round(date / this.totalBlog);
      let content = '';
      if (cov >= 1) {
        content = `每${cov}天一篇`
      } else {
        content = `每天${Math.round(this.totalBlog / date)}篇`
      }
      const time = this.getDate2('2020/08/01');
      this.wordOut.input = `${time}至今,平均${content}博客,总计${this.totalBlog}篇`;
    },
    getDate(date) {
      let dt = new Date(date);
      let y = dt.getFullYear();
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      let h = dt.getHours();
      let time = '';
      if (h > 18 || h < 6) {
        time = '晚上';
      } else if (h > 6 && h < 12) {
        time = '上午';
      } else if (h > 12 && h < 14) {
        time = '中午';
      } else if (h > 14 && h < 18) {
        time = '下午';
      }
      return `${y}/${m}/${d} ${time}`
    },
    getDate2(date) {
      let dt = new Date(date);
      let y = dt.getFullYear();
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      return `${y}年${m}/${d}日`
    },
    getTimeShaft() {
      if (this.operate === '没有更多啦！') {
        return;
      }
      this.setTitle();
    },
  },
  created() {
    this.setTitle();

  },
  mounted() {

  },

}
</script>

<style scoped>
.time-body {
  margin-top: 80px;
}

.month-card {
  vertical-align: top;
  position: relative;
  display: inline-block;
  width: 45%;
  margin: 30px 1%;
  font-size: 0.5em;
  min-width: 450px;
  text-align: left;
  border: 1px dashed #ced6e0;
  border-radius: 5px;
}
.month-card-title{
  position: absolute;
  top: -35px;
  left: 20px;
  font-size: 25px;
  font-weight: bolder;
  font-family: test_zlz;
}
.blog-title-src{
  margin: 10px 0 10px 20px;
  color: #70a1ff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
