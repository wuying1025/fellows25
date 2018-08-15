import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/Mine.vue';
import Test1 from './views/Test1.vue';
import Test2 from './views/Test2.vue';
import Error from './views/Error.vue';
import Movie from './views/Movie.vue';
import MovieDetail from './views/MovieDetail.vue';
import ComponentA from './views/ComponentA.vue';
import Vuex from './views/Vuex.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',//hash
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about/:id',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            alias:'/lkw',
            beforeEnter: (to, from, next) => {
                if(from.name=='mine'){
                    next(false);
                }else{
                    next(true);
                }
            }
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine,
            children:[
                {
                    path:'test1',
                    name:'test1',
                    component:Test1,
                },
                {
                    path:'test2/:xx/:age',
                    component:Test2
                },
                {
                    path:'test2',
                    component:Test2
                },
            ]
        },
        {
            path:'/home',
            redirect: '/'
        },
        {
            path:'/home/:xx/:age',
            redirect: '/mine/test2/:xx/:age'
        },
        {
            path:'*',
            component:Error
        },
        {
            path:'/movie',
            component:Movie
        },{
            path:'/movieDetail/:movieId',
            component:MovieDetail
        },
        {
            path:'/componenta',
            component:ComponentA
        },
        {
            path:'/vuex',
            component:Vuex
        }
    ],
});

router.beforeEach((to, from, next) => {
    //...
    console.log(to);
    console.log(from);
    next();
});
router.afterEach((to, from) => {
    // ...
    console.log(111);
});

export default router;
