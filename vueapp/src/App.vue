<template>
  <div id="app">
    <CommonHeader></CommonHeader>
      <router-view/>
    <CommonFooter></CommonFooter>
  </div>
</template>
<script>
  import CommonHeader from '@/components/CHeader.vue';
  import CommonFooter from '@/components/CommonFooter.vue';
  export default {

      components:{
          CommonHeader,
          CommonFooter
      }






  }



</script>
<style lang="scss">

</style>
