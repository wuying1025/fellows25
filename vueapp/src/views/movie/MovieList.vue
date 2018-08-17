<template>
  <li>
    <div class="movie-img">
      <img :src="movie.images.small" alt="">
    </div>
    <div class="movie-desc">
      <h3>{{movie.title}}</h3>
      <p>观众评 <span class="aver">{{movie.rating.average}}</span></p>
      主演：<span v-for="actor in movie.casts">{{actor.name }} </span>
    </div>
  </li>
</template>
<script>
  export default{
    props:['movie']
  }
</script>
<style>

</style>