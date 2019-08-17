<template>
    <div class="title">
        <p>图片评论</p>
        <textarea name="" id="" cols="30" rows="10" v-model="commentContent"></textarea>
        <mt-button type="primary" @click="sendComment">发表评论</mt-button>
    </div>
</template>
<style lang="less">
    textarea{
        width: 100%;
    }
</style>
<script>
export default {
    name:'Comment',
    data () {
        return {
            commentContent:''
        }

    },
    props: ['id'],
    created() {

        console.warn(this.id);
        console.warn(this.commentContent);
    },
    methods: {
         sendComment(){
             console.warn(this.commentContent)
         }
    },
    watch: {
        commentContent(){
             

        }
    }
}
</script>
