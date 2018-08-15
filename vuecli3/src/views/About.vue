<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="about hw"/>
    {{$route.params.id}}
  </div>
</template>
<script>
    import HelloWorld from '@/components/HelloWorld.vue';

    export default {
        components: {
            HelloWorld,
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
          console.log(2222222);
            next();
        },
  }
</script>
