<template>
  <div>
    <mt-swipe :show-indicators="false" class="imgList">
      <mt-swipe-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style lang="less" scoped>
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
</style>
    
<script>
export default {
  name: "Swipe",
    props:['imgList'],
  data() {
    return {
     
    };
  }
};
</script>

