<template>
  <div class="goodDetail">
    <Swipe :imgList="imgList" />
    <div class="num">
        <ul>
            <li class="fl"> 
                商品数量{{$store.state.count}}
            </li>
            <mt-button @click.native="increase(1)"  type="primary">-</mt-button>
            <span>{{count}}</span>
             <mt-button @click.native="addCount(1)" size="normal" type="primary">+</mt-button>
        </ul>
    </div>
    <mt-button size="large" type="primary" class="addCar" @click="addShopCart ">加入购物车</mt-button>
      <transition name="shop_cart" v-on:after-enter="afterEnter">
          <mt-badge type="warning"  v-if="addShow">10</mt-badge>
      </transition>
  </div>
</template>
<style lang="less" scoped>
.goodDetail {
  margin-top: 40px;
}
.num{
    margin: 5px 0 0 5px;
    ul{
        li{
            margin-right: 5px;
        }
    }
}
.addCar{
    margin-top: 10px;
}
  // 可以有两种方式实现飞入动画,用动画的效果感觉会更好一点
  /* 动画效果实现 */
   @keyframes bounce-in {
    0% {
      transform: scale(1);
        transform: translate(50px, 50px,0);
    }
    50%{
          transform: translate(100px, 100px);
    }
    100% {
      transform: scale(.5);
      transform: translate(200px, 300px);
    }
  }
  .shop_cart-enter-active {
    animation: bounce-in 1s;
  } 
</style>

<script>
export default {
  data() {
    return {
      imgList: [],
      count:0,
      addShow:false
    };
  },
  created() {
    this.$axios
      .get("/api/data")
      .then(res => {
        this.imgList = res.data.data;
        console.warn(this.imgList);
      })
      .catch(err => {});
  },
  methods: {
     increase(n){
         if(this.count>0){
             this.count--;
             this.$store.dispatch('actionsReduceCount',n)
         }
     },
     addCount(n){
         this.count++;
         this.$store.dispatch('actionsAddCount',n)
     },
    //  加入购物车
     addShopCart () {
        this.addShow = true
        // 添加类名的方法没有动画结束的时机,这里我直接写了一个定时器,时机和动画时间一致,在图片移动到购物车位置时隐藏
        setTimeout(() => {
             this.addShow = false;
        }, 1000);
      
        console.warn($store.state.count)
        console.warn(this.$store.state.count)
     
      },
      afterEnter(el){
          console.warn('111');
        
      }
  }
};
</script>

