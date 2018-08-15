<template>
    <div class="movie">
        <ul>
            <li v-for="m in movieList" @click="detail(m.id)">
                <!--<router-link :to="'/movieDetail/'+m.id">-->
                    {{m.name}},{{m.avg}}
                <!--</router-link>-->
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
           return {
               movieList:[
                   {
                       id:1,
                       name:'西红柿',
                       avg:8.7
                   },
                   {
                       id:2,
                       name:'西红柿1',
                       avg:8.5
                   },
                   {
                       id:3,
                       name:'西红柿2',
                       avg:'7.0'
                   },
               ]
           }
        },
        methods:{
            detail(id){
                this.$router.push('/movieDetail/'+id);
            }
        }
    }
</script>
<style>

</style>