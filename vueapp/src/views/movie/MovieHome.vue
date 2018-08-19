<template>
  <div class="movie-home">
    <ul>
      <MovieList v-for="movie in movieList" :movie="movie" @click.native="getDetail(movie)"></MovieList>
    </ul>
    <div class="loading" v-show="isShow">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div v-show="isEnd">
        到底了...
    </div>
  </div>
</template>
<script>
  import Axios from 'axios';
  import MovieList from '@/views/movie/MovieList.vue';
  export default{
      data(){
          return {
            movieList:[],
            isShow:false,
            isEnd:false
          }
      },
      created(){
          //https://www.cnblogs.com/trackingmore/p/7156877.html
          //https://developers.douban.com/wiki/?title=movie_v2
         this.getData();
//          Axios.get('/movie.json')
//              .then((res)=>{
//                  this.movieList = res.data.subjects;
//                  console.log(this.movieList);
//              });

          window.onscroll= ()=> {
              var scrollTop = document.documentElement.scrollTop;
              var scrollHeight = document.documentElement.scrollHeight;
              var clientHeight = document.documentElement.clientHeight;
              if(scrollTop + clientHeight == scrollHeight && !this.isEnd){
                  this.isShow = true;
                  this.getData();
              }
          }
      },
      methods:{
          getDetail(movie){

            this.$router.push('/movie/movie-detail/'+movie.id);


          },
          getData(){
//              Axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?start='+this.movieList.length+'&count=5')
//                  .then((res)=>{
//                      this.movieList = [...this.movieList,...res.data.subjects];
//                      console.log(this.movieList);
//                      this.isShow = false;
//                      if(res.data.subjects.length < 5){
//                          this.isEnd = true;
//                      }
//                  });

              Axios.get('/movie.json')
              .then((res)=>{
                  var arr = res.data.subjects.slice(this.movieList.length,this.movieList.length+5);
                  this.movieList = [...this.movieList,...arr];
                  console.log(this.movieList);
                      this.isShow = false;
                      if(arr.length < 5){
                          this.isEnd = true;
                      }
              });
          }
      },
      components:{
          MovieList
      },
      destroyed(){
          window.onscroll = null;
      }

  }
</script>
<style scoped lang="scss">
  .loading{
    text-align: center;
  }

</style>