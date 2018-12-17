<template>
    <div class="listContain" >
        <swiper indicator-dots="true" indicator-color="#EEEE00">
            <swiper-item>
                <img src="/static/images/detail/list/j1.jpg">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/list/j2.jpg">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/list/j3.jpg">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/list/j4.jpg">
            </swiper-item>
        </swiper>
        <list-template v-for="(item,index) in listTmp" :key="index" :item="item" :index="index" ></list-template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListTemplate from '../list-template/list-template.vue'
export default {
    components:{
        ListTemplate
    },
    beforeMount(){
        //分发action修改状态
        this.$store.dispatch('getList')
    },
    computed:{
        //映射状态到本地
        ...mapState(['listTmp'])
    },
    
}
</script>

<style>
.listContain swiper{
    width:100%;
    height:400rpx;
}
.listContain swiper img{
    width:100%;
    height:100%;
}
</style>
