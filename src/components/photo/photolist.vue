<template>
  <div id="app">
    <my-header title="图片列表" />
    <div class="title">
      <ul>
        <li class v-for="(item,index) in list" :key="item.id" @click="pholistDetail(item.id,index)">
          <a href="javaScript:void(0)" :class="{actives:index==currentIndex}">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="photolist">
      <ul>
        <li v-for="(item,index) in photolist" :key="item.id">
          <router-link :to="{name:'pholistDetail',query:{id:item.id}}">
            <img v-lazy="item.img" alt />
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  ul {
    width: auto;
    height: 52px;
    white-space: nowrap;
    overflow-x: auto;
    li {
      padding: 10px 10px;
      display: inline-block;
      a.actives {
        color: skyblue;
      }
    }
  }
}

.photolist {
  ul {
    li {
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
}
</style>

<script>
let list = [
  { id: "0", title: "国产" },
  { id: "1", title: "日本" },
  { id: "3", title: "教师" },
  { id: "4", title: "国产偷拍" },
  { id: "5", title: "国产3p" },
  { id: "6", title: "国产" },
  { id: "7", title: "国产" },
  { id: "8", title: "国产" },
  { id: "9", title: "国产" },
  { id: "10", title: "国产" },
  { id: "11", title: "国产" },
  { id: "12", title: "国产" },
  { id: "13", title: "国产" },
  { id: "14", title: "国产" },
  { id: "15", title: "国产" },
  { id: "16", title: "国产" },
  { id: "17", title: "国产" },
  { id: "18", title: "国产" },
  { id: "19", title: "国产" }
];
export default {
  data() {
    return {
      list: list,
      currentIndex: 0,
      active: "",
      photolist: []
    };
  },
  methods: {
    pholistDetail(id, index) {
      this.currentIndex = index;
      this.$router.push({ name: "photolist", params: { categoyrID: id } });
    }
  },
  created() {
    this.$axios
      .get("/api/photolist")
      .then(res => {
        this.photolist = res.data.data;
      })
      .catch(err => {});
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to);

    next();
  }
};
</script>
