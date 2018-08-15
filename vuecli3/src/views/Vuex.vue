<template>
    <div>
        <h1>{{count}}</h1>
        <h1>{{msg}}</h1>
        <h1>{{len}}</h1>

        <!--<button @click="$store.state.count++">+</button>-->
        <button @click="$store.commit('add',2)">+</button>
        <button  @click="$store.commit('sub')">-</button>
        <input type="text" v-model="str">
    </div>
</template>
<script>
    import ComponentB from '@/views/ComponentB.vue';
    import ComponentC from '@/views/ComponentC.vue';
    import { mapState } from 'vuex'

    export default {
        data(){
            return {
                str:'sssssss'
            }
        },
//        computed:{
////            count(){
////                return this.$store.state.count;
////            }
//        }
//        computed:mapState({
//            count1: state=>{
//               return state.count++
//            }
//            ,
//            xx: state=>state.msg
//        })
//        computed:mapState(['count','msg'])
        computed:{
            len(){
                return this.str.length;
            },
            ...mapState(['count','msg'])
        }

    }
</script>
<style>

</style>