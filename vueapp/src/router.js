import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Book from './views/book/Book.vue';
import Photo from './views/photo/Photo.vue';
import Music from './views/music/Music.vue';
import MovieDetail from './views/movie/MovieDetail.vue';
import MovieHome from './views/movie/MovieHome.vue';
import PhotoDetail from './views/photo/PhotoDetail.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path:'/',
          redirect:'/movie/movie-home'
      },
      {
        path:'/movie',
        name:'movie',
        component:Movie,
          children:[
              {
                  path:'movie-detail/:id',
                  name:'moviedetail',
                  component:MovieDetail
              },
              {
                  path:'movie-home/',
                  name:'moviehome',
                  component:MovieHome
              }

          ]
      },
      {
          path:'/music',
          name:'music',
          component:Music
      },
      {
          path:'/book',
          name:'book',
          component:Book
      },
      {
          path:'/photo',
          name:'photo',
          component:Photo
      },{
          path:'/photoDetail/:index',
          component:PhotoDetail
      }

  ],
});
