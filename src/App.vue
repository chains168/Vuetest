<template>
  <div id="home">
    <div id="nav">
        <my-header title="首页">
          <span class="iconfont iconchazhao" slot="search"></span>  
          
        </my-header>

    </div>
     

             

    <router-view />
    <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
    <tabBar v-on:getMessage="getMessage" :selected="selected"></tabBar>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}

</style>
<script>
import { constants } from "crypto";
import tabBar from "./components/tabbar/tabbar";
export default {
  name: "App",
  data() {
    return {
      selected: "home"
    };
  },
  components: { tabBar },
  methods: {
    getMessage(val) {
      console.warn(val);
      this.$router.push({
        name: val
      });
    },
    handleClose(){
        
    }
  },
  created() {
     //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })

  },
};
</script>

