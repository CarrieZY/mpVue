<template>
    <div>
        <div class="moviesdetail-contain">
            <img :src="moviesDetail.images.large" alt="" class="movie-img">
            <p class="title">{{moviesDetail.title}}</p>
            <div class="content">
                <span>评分:{{moviesDetail.rating.average}}</span>
                <span>导演:{{moviesDetail.directors[0].name}}</span>
                <span>主演:{{moviesDetail.casts[0].name}}</span>
            </div>
            <button>观看该影片</button>
        </div>
    </div>
</template>

<script>
import {mapState } from 'vuex'
export default {
    data(){
        return {
            moviesDetail:{}
        }
    },
    computed:{
        //映射状态到本地
        ...mapState(['moviesList'])
    },
    beforeMount(){
        console.log(this)
        this.moviesDetail = this.moviesList[this.$mp.query.index]
        console.log(this.moviesDetail)
    }
}
</script>

<style scoped>
.moviesdetail-contain{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie-img{
  width:70%;
  height:700rpx;
  margin:20rpx 0;
}
.title{
  width:70%;
  text-align: center;  
  font-size: 40rpx;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content{
  display: flex;
  flex-direction: column;
  font-size: 32rpx;
}
button{
  width:70%;
  height:80rpx;
  background: #31c27c;
  color: #fff;
  line-height:80rpx;
  margin-top:50rpx;
}
</style>
