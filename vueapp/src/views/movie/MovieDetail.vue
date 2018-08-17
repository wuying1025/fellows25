<template>
  <div class="movie-detail" v-if="show">
    <h3>名称:{{movieDetail.title}}</h3>
    <img :src="movieDetail.images.small" alt="">
    <p>id:{{movieDetail.id}}</p>
    <p>简介:{{movieDetail.summary}}</p>
  </div>
</template>
<script>
  import Axios from 'axios';
  export default{
    data(){
      return {
          movieDetail:{},
          show:false
      }
    },
    mounted(){

     var movieId = this.$route.params.id;
        Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/'+movieId)
            .then((res)=>{
              this.movieDetail = res.data;
              this.show=true;
          })


    }
  }
</script>
<style>

</style>