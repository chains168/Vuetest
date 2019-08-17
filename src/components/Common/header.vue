<template>
  <div>
    <mt-header :title="title" fixed>
      <router-link to='' slot="left">
        <mt-button icon="back"  @click="back" >返回</mt-button>
      </router-link>
     
      <mt-button icon="" slot="right">
        <slot name="search"></slot>
      </mt-button>
    
          
    </mt-header>
   
     
  </div>
</template>
<style lang="less" scoped>
#nav {
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
<script>
export default {
    name:'my-header',
    data(){
        return{

        }
    },
    props: ['title'],
    methods: {
        back(){
              console.warn('1111');
            this.$router.go(-1)
        }
    },


}
</script>