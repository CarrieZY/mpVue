<template>
<div>
    <div class="movies-contain" v-for="(item,index) in moviesList" :key="index" @tap="toMoviesDetail(index)">
        <img :src="item.images.large" alt="" class="pic">
        <div class="content">
            <p class="title">{{item.title}}</p>
            <p class="year">年底:{{item.year}}</p>
            <p class="director">导演:{{item.directors[0].name}}</p>
        </div>
        <div class="score">{{item.rating.average}}</div>
    </div>
</div>    
</template>

<script>
const MOVIES_URL ="http://t.yushu.im/v2/movie/top250";
export default {
    data(){
        return {
            moviesList:[]
        }
    },
    beforeMount(){
      this.$fly.get(MOVIES_URL).then((res) =>{
          console.log(res)
          let moviesList = res.data.subjects
          this.$store.dispatch('getMoviesList',moviesList)
          this.moviesList = moviesList
      })  
    },
    methods:{
        toMoviesDetail(index){
            wx.navigateTo({
               url:'/pages/moviesDetail/main?index='+index
            })
        }
    }
}
</script>

<style scoped>
.movies-contain{
    display: flex;
    padding:20rpx;
    border-bottom:1px solid #eee;
}
.pic{
  width: 128rpx;
  height:128rpx;
}
.content{
  display: flex;
  flex-direction: column;
  width:70%;
  margin-left:20rpx;
}
.content .title{
  font-size: 32rpx;
  color:#000;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
.content .year{
  font-size: 28rpx;
  color:#666;
  margin:8rpx 0;
}
.content .director{
  font-size: 30rpx;
  color:#333;
}
.score{
  font-size: 40rpx;
  color:red;
  font-weight: bold;
}
</style>
