<template>
    <div class="detail-contain">
        <img :src="isMusic?detailObj.music.coverImgUrl:detailObj.detail_img" alt="" class="detail-img">
        <img :src="isMusic?'/static/images/music/music-start.png':'/static/images/music/music-stop.png'" alt="" 
        @tap="handleMusic" class="music-img">
        <div class="avatar">
            <img :src="detailObj.avatar" alt="">
            <span>{{detailObj.author}}</span>
            <span>发布于:</span>
            <span>{{detailObj.date}}</span>
        </div>
        <p class="title">{{detailObj.title}}</p>
        <div class="collection">
            <img @click="handelClick" :src=" isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="">
            <img src="/static/images/icon/share.png" alt="" @tap="handleShare">
        </div>
        <div class="line"></div>
        <button open-type='share'>转发此文章</button>
        <p class="text">{{detailObj.detail_content}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import isPlayObj from '../../../static/datas/isPlay'
import isPlay from '../../../static/datas/isPlay';
export default {
    data(){
        return {
            detailObj:{},
            isCollected:false,
            isMusic:false
        }
    },
    beforeMount(){
        console.log(this)
         this.index = this.$mp.query.index
        //本地是否收藏
        let old = wx.getStorageSync('isCollected')
        if(!old){
            wx.setStorage({
                key:'isCollected',
                data:{}
            })
        }else{
           this.isCollected = old[this.index]?true:false
        }
        //判断当前页面音乐是否是在播放
        isPlayObj.pagesIndex === this.index && isPlayObj.isPlay?this.isMusic=true:this.isMusic=false
        wx.onBackgroundAudioPlay(() =>{
            this.isMusic=true
            isPlayObj.pagesIndex =this.index
            isPlayObj.isPlay=true
        })
        wx.onBackgroundAudioStop(() =>{
            this.isMusic=false
            isPlayObj.pagesIndex =false
            isPlayObj.isPlay=false
        })
    },
    computed:{
        ...mapState(['listTmp'])
    },
    mounted(){
        console.log(this)
        this.detailObj = this.listTmp[this.index]
    },
    methods:{
        handelClick(){
            let isCollected = !this.isCollected
            this.isCollected = isCollected
            let title = isCollected?'收藏成功':'取消收藏'
            wx.showToast({
                title,
                icon:'success'
            })
            //读取之前本地缓存的状态 查看是否收藏
            let old = wx.getStorageSync('isCollected')
            old[this.index] = isCollected
            wx.setStorage ({
                key:'isCollected',
                data:old
            })
        },
        handleMusic(){
            let isMusic = !this.isMusic
            this.isMusic = isMusic
            let {dataUrl,title} = this.detailObj.music
            if(isMusic){
                 wx.playBackgroundAudio({
                    dataUrl,
                    title
                })
            }else{
                wx.pauseBackgroundAudio()
            }
           
        },
        handleShare(){
            wx.showActionSheet({
                itemList:['分享到朋友圈','分享给好友','分享到微博']
            })
        }
    }
}
</script>

<style scoped>
.detail-contain{
    display: flex;
    flex-direction: column;
}
.detail-img{
    width:100%;
    height:460rpx;
}
.avatar{
    padding: 10rpx;
}
.avatar img{
    width:64rpx;
    height:64rpx;
    vertical-align: middle;
}
.avatar span{
    font-size: 28rpx;
    margin-left:10rpx;
}
.title{
    font-size: 42rpx;
    font-weight:bold;
    padding:10rpx;
}
.collection {
    margin-right:30rpx;
}
.collection img{
    float:right;
    width:90rpx;
    height:90rpx;
    margin-right:5rpx;
}
.line{
    width:90%;
    z-index:-1;
    height:1rpx;
    background: #E1FFFF;
    margin:-45rpx auto 0 auto;
    
}
.text{
    font-size: 32rpx;
    text-indent: 32rpx;
    margin-top:10rpx;
    padding:10rpx;
}
button{
    margin-top:45rpx;
}
.music-img{
    width:60rpx;
    height:60rpx;
    position: absolute;
    top:200rpx;
    left:50%;
    margin-left:-30rpx;
}
</style>
