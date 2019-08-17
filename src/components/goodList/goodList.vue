<template>
  <div>
    <my-header title="商品列表" />
    <div class="goodList page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }" >
      <mt-loadmore
        :bottom-method="loadBottom"
        @bottom-status-change="handleBottomChange"
        :bottom-all-loaded="allLoaded"
        ref="loadmore" :auto-fill='autoFill'
      >
        <ul class="page-loadmore-list">
          <li class="fl page-loadmore-listitem" v-for="(item,index) in goodlist" :key="item.id">
            <router-link :to='{name:"goodsDetail",params:{id:item.id}}'>
              <img :src="item.img" alt />
            </router-link>
          </li>
        </ul>
         <!-- <div v-if="allLoaded" style="text-align:center;" class="data-none">没有更多数据了</div>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
                        <mt-spinner v-show="bottomStatus == 'loading'" color="#26a2ff"></mt-spinner>
                    </span>
        </div> -->

      </mt-loadmore>
    </div>
  </div>
</template>
<style lang="less" scoped>

.goodList {
    top: 84px;
    overflow: scroll;
    position: absolute;
    bottom: 55px;

  ul {
    li {
      width: 50%;
      height: 150px;
      img {
        width: 100%;
        height: 140px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      examplename: 'Loadmore',
      goodlist: [],
      bottomStatus:'',
      allLoaded:false,
      pageNum:0,//页码,
      wrapperHeight:0,
      autoFill:false

    };
  },
  created() {
    this.goodList();
  },
  

  methods: {
     handleBottomChange(status){
          this.bottomStatus = status;
          console.warn(status);
        
      },
      loadBottom(){
          this.goodList();
         
          
           setTimeout(()=>{
              
              this.$refs.loadmore.onBottomLoaded();
           },3000)
        //   this.$refs.loadmore.onBottomLoaded();
      },
     
      goodList(){
        console.warn(this.pageNum)
      this.$axios.get(`/api/photolist`)
      .then(res => {
        this.goodlist = res.data.data;
     
      })
      .catch(err => {});
      }
      
  },
   mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;

    }
};
</script>
