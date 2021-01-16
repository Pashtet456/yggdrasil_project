import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Vuex from "../store/index";
Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YgdMain',
        component: Home,
    },
    {
        path: '/rules',
        name: 'YgdRules',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue' ),
    },
    {
        path: '/donate',
        name: 'YgdDonate',
        component: Home,
    },
    {
        path: '/lotr/main',
        name: 'LotrMain',
        component: Home,
    },
];

const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
} );

router.beforeEach( ( to, from, next ) => {
    if ( to.name.match( /Ygd/ ) ) {
        Vuex.commit( 'changeCurrentProject', 'yggdrasil' );
        next();
    } else if ( to.name.match( /Lotr/ ) ) {
        Vuex.commit( 'changeCurrentProject', 'lotr' );
        next();
    } else {
        next();
    }
},
);

export default router;
