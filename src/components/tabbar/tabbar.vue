<template>
  <div class="tabBar">
        <ul>
          <li v-for="(item,index) in tabs" :key="item.id" @click="changHandle(index)">
                <router-link :to="item.routerName" exact :class="{'link-active':index==num}">
                  <mt-badge type="" color="red" size="normal" v-if="index==2">{{$store.state.count}}</mt-badge>
                  <span :class="item.className" ></span>
                  <p>{{item.title}}</p>
                </router-link>
          </li>
          
        
        </ul>
  </div>
</template>
<style lang="less" scoped>
   .link-active{
      background-color:skyblue;
   }
  .tabBar {
      background: #fff;
      position: fixed;
      bottom: 0;
      width: 100%;
     ul{
      width: 100%;
      overflow: hidden;
      li{
        float: left;
        position: relative;
        width: 25%;
        height: 55px;
        text-align: center;
        span{
          width: 15px;
          height: 15px;
        }
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          padding-top: 10px;
        }
      }
  }
  }
 .mint-badge.is-size-normal{
    width: 25px;
    height: 25px;
    padding: 0  ;
    text-align: center;
  }
 .iconfont {
   font-size: 22px;
 }
 .mint-badge.is-size-normal[data-v-49e6efcf]{
   position: absolute;
   top: 0;
   right: 10px;
 }
</style>
 
<script>
let tabs=[
  {
    id:'1',title:'首页',routerName:{name:'home'},className:'iconfont iconshouye2'
  },
   {
    id:'2',title:'会员',routerName:{name:'vip'},className:'iconfont icongouwuche'
  },
   {
    id:'3',title:'购物车',routerName:{name:'shopcart'},className:'iconfont iconvip'
  },
    {
    id:'4',title:'查找',routerName:{name:'search'},className:'iconfont iconchazhao'
  },

];
export default {
  
   name:'tabBar',
    data () {
        return {
            tabs:tabs,
            num:0
        }
    }
  ,
  watch:{ 
    selected(val,oldVal){
      console.warn(val);
      this.$emit('getMessage',val)
    }
  },
  methods: {
    changHandle(index){
        this.num=index;
    }
  }
};

</script>

