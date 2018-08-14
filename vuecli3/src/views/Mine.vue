<template>
    <div>
        <h1>这个是我的页面</h1>
        <router-link to="/mine/test1">子路由1</router-link> |
        <router-link to="/mine/test2">子路由2</router-link>
        <router-view/>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>

</style>