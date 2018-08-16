import Vue from 'vue';
import Router from 'vue-router';
import Movie from './views/movie/Movie.vue';
import Book from './views/book/Book.vue';
import Photo from './views/photo/Photo.vue';
import Music from './views/music/Music.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
        path:'/movie',
        component:Movie
      },
      {
          path:'/music',
          component:Music
      },
      {
          path:'/book',
          component:Book
      },
      {
          path:'/photo',
          component:Photo
      }
  ],
});
