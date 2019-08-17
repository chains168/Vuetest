<template>
    <div class="photoDetail">
            <my-header title="图片详情"/>
            <div class="list"> 
                    <ul>
                        <li class="fl">
                            <vue-preview :slides="slide1"></vue-preview>
                        </li>
                        
                      

                    </ul>
            </div>
            
            <Comment :id='this.$route.query.id'/>
    </div>
</template>
<style lang="less">
    .photoDetail{
        margin-top: 40px;
        h3{
            text-align: center; 
        }
    }
    .list{
        ul{
            li{
              
                margin-right: 10px;
                img{
                    width: 100%;
                    margin: 10px;
                      width: 100px;
                height: 100px;
                    float: left;
                    height: 100%;
                }
            }
        }
    }
 
</style>    
<script>
export default {
    data () {
        return {
            slide1:[]
        }
    },
    created () {
        this.$axios.get('/api/photoDetailList')
        .then(res=>{
            console.warn(res.data.data);
            this.slide1=res.data.data;
        })
        .catch(err=>{

        })
    }
}
</script>
