<template>
  <div>
    <div class="articleBack" v-for="(item,index) in sideList" :key="index">
      <img class="articleBackImg" :src="item.imgSrc" alt="">
      <div class="articleBackGround">
        <div class="read_button " v-on:click="toDetail(item.id)">阅读</div>
      </div>
      <div class="articleTop">
        Top {{ index + 1 }}
      </div>
      <div style="position: absolute; right: 10px; top: 5px; color: rgb(205,181,66); height: 25px;">
        <div style="font-size: 16px;margin-right: 3px; height: 25px; display: inline-block; vertical-align: middle">
          {{ item.orderNum }}
        </div>
        <div class="icon_my"></div>
      </div>
      <div class="articleTitle ellipsis">
        {{ item.title }}
      </div>
      <div class="articleTag">
        {{ item.type }}
      </div>
      <div class="articleTime">
        {{ getDate(item.lastModifiedTime) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarHot",
  data() {
    return {
      sideList: [
        {
          id: 123,
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          title: '这是一个测试标题很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
          type: '测试2',
          orderNum: 231,
          lastModifiedTime: 1644827779248,
        }, {
          id: 123,
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          title: '这是一个测试标题',
          type: '测试2',
          orderNum: 231,
          lastModifiedTime: 1644827779248,
        }, {
          id: 123,
          imgSrc: 'https://pic1.zhimg.com/80/v2-ad826d1a5af654742a41246805ce7b7d_1440w.jpeg',
          title: '这是一个测试标题',
          type: '测试2',
          orderNum: 231,
          lastModifiedTime: 1644827779248,
        }
      ]
    }
  },
  methods: {
    getDate(date) {
      let dt = new Date(date);
      let y = dt.getFullYear();
      let m = dt.getMonth() + 1;
      let d = dt.getDate();
      let h = dt.getHours();
      let mi = dt.getMinutes();
      return `${y}/${m}/${d} ${h}:${mi}`
    },
    toDetail() {

    }
  }
}
</script>

<style scoped>
.articleBack {
  position: relative;
  width: auto;
  height: 150px;
  background-size: 100%;
  margin-top: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.articleBackImg {
  z-index: 9;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.read_button {
  cursor: pointer;
  transition: color, background-color 800ms;
  width: 50px;
  height: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0);
  background-color: rgba(255, 255, 255, 0);
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  line-height: 25px;
}

.articleTop {
  color: #f6f8f5;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
}

.articleBack:hover .articleBackGround {
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.4);
}

.articleBack:hover .read_button {
  color: rgb(80, 5, 5);
  background-color: rgba(255, 255, 255, 0.8);
}

.articleTime {
  z-index: 8;
  position: absolute;
  color: #eae2e2;
  bottom: 10px;
  right: 20px;
  font-size: 13px;
  padding: 2px;
  border-radius: 5px;
  background-color: rgba(83, 80, 80, 0.8);
}

.articleTag {
  z-index: 8;
  position: absolute;
  color: #eae2e2;
  bottom: 10px;
  left: 20px;
  font-size: 13px;
  padding: 2px;
  border-radius: 5px;
  background-color: rgba(83, 80, 80, 0.8);
}

.articleTitle {
  z-index: 8;
  color: white;
  position: absolute;
  bottom: 40px;
  left: 10px;
  font-size: 18px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  line-height: 25px;
}

.articleBackGround {
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 1s;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.articleBackImg {
  z-index: 9;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.articleBack {
  position: relative;
  width: auto;
  height: 150px;
  background-size: 100%;
  margin-top: 5px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.icon_my {
  display: inline-block;
  width: 20px;
  height: 25px;
  background-image: url('../../../../public/image/icon_hot.png');
  background-size: 20px 20px;
  background-position-y: 4px;
  background-repeat: no-repeat;
}
</style>