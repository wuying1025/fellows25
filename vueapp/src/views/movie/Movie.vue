<template>
  <div class="movie">
    <ul>
      <MovieList v-for="movie in movieList" :movie="movie"></MovieList>
    </ul>
  </div>
</template>
<script>
  import Axios from 'axios';
  import MovieList from '@/views/movie/MovieList.vue';
  export default{
      data(){
          return {
            movieList:[]
          }
      },
      created(){
          //https://www.cnblogs.com/trackingmore/p/7156877.html
          //https://developers.douban.com/wiki/?title=movie_v2
          Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters')
              .then((res)=>{
                this.movieList = res.data.subjects;
                console.log(this.movieList);
              });
//          Axios.get('/movie.json')
//              .then((res)=>{
//                  this.movieList = res.data.subjects;
//                  console.log(this.movieList);
//              });
      },
      components:{
          MovieList
      }
  }
</script>
<style lang="scss">

  .movie li{
    display: flex;
    padding:10px;
    .movie-img{
      flex-grow: 1;
      width: 0;
    }
    .movie-desc{
      flex-grow: 3;
      width: 0;
      margin-left: 20px;
      .aver{
        color:orange;
      }
    }
  }


</style>