<template>
  <div class="photo">
    <router-link v-for="(p,index) in photoList" :to="'/photoDetail/'+index">
      <img :src="p.src">
    </router-link>
  </div>
</template>
<script>
  import Axios from 'axios';
  export default{
      data(){
        return {
            photoList:[]
        }
      },

      created(){
          Axios.get('data/photodata.json')
              .then((res)=>{
//                 src =  require('@/assets/',src);
              this.photoList = res.data.photoData;
              this.$store.dispatch('setPhoto',this.photoList);
          })
      }
  }


</script>
<style scoped lang="scss">
  .photo img{
    width: 50%;
  }

</style>