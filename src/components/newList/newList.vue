
<template>
  <div id="app">
        <my-header title="新闻列表"/>
        
        <div class="newList">
            <ul>
                <li class="clearfix" v-for="(item,index) in newList" :key="item.id">
                    <router-link :to="{name:'newDetail',query:{id:item.id}}">
                            <div class="new_img fl">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="content fl">
                                    <p class="title">{{item.title}}</p>
                                    <div class="newDesc clear">
                                        <p class="summary">内容</p>
                                        <p>
                                            <span class="priaise">点赞数：32</span>
                                            <span class="time">发表时间：2017-8-20</span>
                                        </p>
                                    </div>
                            </div>
                    </router-link>
                </li>
            </ul>
        </div>
    
  </div>
</template>
<style lang="less" scoped>
 .newList{
   
        ul{
            li{
                margin: 10px;
                .new_img{
                 
                    img{
                        width: 100px;
                        height: 100px;
                    }
                }
                .content{
                    P{
                        &.title{
                            overflow: hidden;
                            max-width: 200px;
                        }
                    }
                }

            }
        }
    }
    .title{
        margin-top: 30px;
    }
</style>
   

<script>
export default {
         data () {
            return {
                newList:[]
            }
        },
        created () {
            this.$axios.get('/api/newList')
            .then(res=>{
                this.newList=res.data.data;
                console.warn(this.newList);
            })
            .catch(err=>{
                console.warn()
            })
        }
    
};
</script>


