<template>
  <router-link to="/photo">
    <v-touch class="photo-detail" :style="{'background-image':'url('+photoList[index].src+')'}"
             @swipeleft="left" @swiperight="right">
    </v-touch>
  </router-link>

</template>
<script>
  import { mapState } from 'vuex';
  export default{
    data(){
      return {
          index:this.$route.params.index
      }
    },
      methods:{
        left(){
            this.index++;
        },
        right(){
            this.index--;
        }
      },
      computed:mapState(['photoList'])
  }
</script>
<style scoped lang="scss">
.photo-detail{
  /*background-image: url('/img/1.jpg');*/
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #000;
  background-position: center;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;


}

</style>