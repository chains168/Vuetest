<template>
    <div class="title">
            <h4 class="back fl" @click="back"><</h4>
            <h3 style="tec">
              {{title}}
            </h3>
    </div>
</template>
<style lang="scss" scoped>
    #nav{
       

    }
    .title{
        position: absolute;
        z-index: 6;
        width: 100%;
        height: 44px;
         margin-top: 40px;
        line-height: 44px;
        background-color: #fff;
        h4{
            text-align: center;
            &.back{
                font-size: 18px;
                margin-left: 20px;
            }
        }
        h3{
            text-align: center;
        }
    }
</style>
<script>
export default {
    name:'Navbar',
    data () {
        return {
            
        }
    },
    props: ['title'],
    methods: {
        back(){
         
            this.$router.go(-1);
        }
    }

}
</script>

