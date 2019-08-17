<template>
  <div id="home">
    <!-- -->
    <Swipe :imgList='imgList'/>
    <!-- 九宫格 -->
    <div class="list clearfix">
      <ul>
        <li v-for="(item,index) in gridImg" :key="item.id">
          <router-link :to="item.router">
            <img :src="item.src" alt="">
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
#nav {
  padding: 0;
}
#home{
  margin-top: 40px;
}
.mint-swipe-indicator {
  width: 100%;
  height: 100px;
}
.mt-swipe-item {
  width: 100%;
}
.imgList {
  height: 200px;
}
.imgList img {
  width: 100%;
  height: 200px;
}
.list {
  width: 100%;
  margin: 0 auto;
  ul {
    width: 100%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    li {
      text-align: center;
      float: left;
      width: 33%;
    }
  }
}
</style>
 
  

<script>
import src1 from "../assets/area.png";
import src2 from "../assets/area.png";
import src3 from "../assets/area.png";
import src4 from "../assets/area.png";
// @ is an alias to /src
var gridImg = [
  {
    id: 1,
    src: src1,
    title: "新闻资讯",
    router: { path: "/newList", name: "newList" }
  },
  {
    id: 2,
    src: src2,
    title: "图文分享",
    router: { path: "/photolist", name: "photolist",params:{categoyrID:0}}
  },
  {
    id: 3,
    src: src1,
    title: "商品展示",
    router: { path: "/goodsList", name: "goodsList" }
  },
  {
    id: 4,
    src: src1,
    title: "资讯",
    router: { path: "/newList", name: "newList" }
  },
  {
    id: 5,
    src: src1,
    title: "联系我们",
    router: { path: "/newList", name: "newList" }
  },
  {
    id: 6,
    src: src1,
    title: "商品列表",
    router: { path: "/newList", name: "newList" }
  }
];

export default {
  name: "home",
  data() {
    return {
      imgList:[],
      gridImg: gridImg
    };
  },
  components: {},
  created() {
    this.$axios
      .get("/api/data")
      .then(res => {
        this.imgList = res.data.data;
        console.warn(this.imgList);
      })
      .catch(err => {});
  }
};
</script>

