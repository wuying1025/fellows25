<template>
    <ul class="footer" :style="{background:bgColor}">
        <li v-for="menu in menuList">
            <router-link :to="menu.path" @click.native="changeBg(menu)">{{menu.name}}</router-link>
        </li>
    </ul>
</template>
<script>
    import {mapState} from 'vuex';
    export default{
        props:['menuList'],
        data(){
            return {
            }
        },
        methods:{
            changeBg(menu){
                this.$store.dispatch('changeBg',menu);
            }
        },
        computed:mapState(['bgColor']),
    }
</script>
<style lang="scss">
    .footer {
        height: 1rem;
        width: 100%;
        color: #fff;
        position: fixed;
        bottom: 0;
        line-height: 1rem;
        display: flex;
        li{
            flex-grow: 1;
            text-align: center;
            a{
                color:#ccc;
                outline: none;
                &.router-link-active{
                    color:#fff;
                }
            }
        }
    }
</style>