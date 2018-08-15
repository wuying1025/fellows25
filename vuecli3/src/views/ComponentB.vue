<template>
    <div>
        <h1>显示msg {{count}}</h1>
    </div>
</template>
<script>
    export default {
        props:['msg'],
        data(){
            return {

            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        }
    }
</script>
<style>

</style>