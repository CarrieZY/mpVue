<template>
    <div class="listTemplate" @click="toDetail">
        <div class="avatar">
            <img :src="item.avatar">
            <span>{{item.date}}</span>
        </div>
        <p class="title">{{item.title}}</p>
        <img class="listImg" :src="item.detail_img">
        <p class="text">{{item.detail_content}}</p>
        <div class="content">
            <img src="/static/images/icon/star.png">
            <span>{{item.love_count}}</span>
            <img src="/static/images/icon/view.png" alt="">
            <span>{{item.attention_count}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'item',
        'index'
    ],
    methods:{
        toDetail(){
            wx.navigateTo({
                url:'/pages/detail/main?index='+this.index
            })
        }
    }
}
</script>

<style>
.listTemplate{
    display: flex;
    flex-direction: column;
}
.avatar img{
    width:60rpx;
    height:60rpx;
    vertical-align: middle;
    padding:10rpx;
    margin-right:10rpx;
}
.avatar span{
    font-size: 28rpx;
    color:#666;
}
.title{
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
}
.listImg{
    width:100%;
    height:460rpx;
}
.text{
    font-size: 32rpx;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 3rpx;
}
.content img{
    width:32rpx;
    height:32rpx;
    vertical-align: middle;
}
.content span{
    font-size: 22rpx;
    color:#333;
}
</style>
