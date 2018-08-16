<template>
  <div id="app">
    <CommonHeader></CommonHeader>
      <router-view class="content"/>
    <CommonFooter :menuList="menuList"></CommonFooter>
  </div>
</template>
<script>
  import CommonHeader from '@/components/CHeader.vue';
  import CommonFooter from '@/components/CommonFooter.vue';
  export default {
      data(){
          return {
              menuList:[{
                  name:'电影',
                  path:'/movie'
              },{
                  name:'音乐',
                  path:'/music'
              },{
                  name:'书籍',
                  path:'/book'
              },{
                  name:'图片',
                  path:'/photo'
              }]
          }
      },
      components:{
          CommonHeader,
          CommonFooter
      }

  }

</script>
<style lang="scss">
  .content{
    margin: 1rem 0;
  }
</style>
