<template>
    <div class="index-contain">
        <img :src="userInfo.avatarUrl" alt="" class="indexImg" v-show="isShow">
        <button open-type="getUserInfo" @getuserinfo="handleGetuserInfo" v-show="!isShow"
        >获取用户信息</button>
        <p class="title">hello {{userInfo.nickName}}</p>
        <div>
            <p class="text" @tap.stop="toDetail">开启mpvue小程序</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false,
            userInfo:{}
        }
    },
    beforeMount(){
        console.log('组件挂载之前')    
    },
    methods:{
        handleGetuserInfo(data){
            console.log(data);
            console.log(this)
            if(data.mp.detail.rawData){
                wx.getUserInfo({
                    success:(data) =>{
                        this.isShow=true
                        this.userInfo=data.userInfo
                    },
                    fail:() =>{
                        console.log('获取失败')
                    }
                })
            }
        },
        toDetail(){
            console.log('todetail')
            wx.switchTab({
                url:'/pages/list/main'
            })
        }
    }
}
</script>


<style>
page{
    background: #EEEE00;
}
.index-contain{
    display: flex;
    flex-direction:column;
    align-items: center;
}
.indexImg{
    width:200rpx;
    height:200rpx;
    border-radius: 50%;
    margin:100rpx 0;
}
.title{
    font-size: 32rpx;
    margin:100rpx 0;
    font-weight: bold;
}
.text{
    font-size: 28rpx;
    width:280rpx;
    height:80rpx;
    line-height: 80rpx;
    border:1rpx solid #666;
    border-radius: 10rpx;
    text-align: center;
}
</style>
