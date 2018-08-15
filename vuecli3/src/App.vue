<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about/1">About1</router-link> |
      <router-link to="/about/2">About2</router-link> |
      <router-link to="/mine">Mine</router-link> |
      <router-link :to="{name:'test1',params:{name:'zhangsan',age:18}}">子路由1</router-link> |
      <router-link to="/mine/test2">子路由2</router-link> |
      <router-link to="/home">重定向</router-link> |
      <router-link to="/home/wangwu/20">重定向参数</router-link> |
      <router-link to="/lkw">别名</router-link> |
      <router-link to="/movie">电影列表</router-link> |
      <router-link to="/vuex">VueX</router-link> |

    </div>
    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<style lang="scss">

  .fade-enter{
      opacity: 0;
  }

  .fade-enter-active{
    transition:opacity 1s linear;
  }

  .fade-enter-to{
    opacity: 1;
  }
  .fade-leave{
    transform: translate(0%);
  }
  .fade-leave-active{
    transition:transform 1s linear;
  }
  .fade-leave-to{
    transform: translate(100%);

  }


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
