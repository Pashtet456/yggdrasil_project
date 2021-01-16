import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from "../store/index";
Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YgdMain',
        component: () => import( /* webpackChunkName: "about" */ '../views/yggdrasil/YgdMain' ),
    },
    {
        path: '/rules',
        name: 'YgdRules',
        component: () => import( /* webpackChunkName: "about" */ '../views/yggdrasil/YgdRules' ),
    },
    {
        path: '/donate',
        name: 'YgdDonate',
        component: () => import( /* webpackChunkName: "about" */ '../views/yggdrasil/YgdDonate' ),
    },
    {
        path: '/lotr/',
        name: 'LotrMain',
        component: () => import( /* webpackChunkName: "about" */ '../views/lotr/LotrMain' ),
    },
    {
        path: '/lotr/donate',
        name: 'LotrDonate',
        component: () => import( /* webpackChunkName: "about" */ '../views/lotr/LotrDonate' ),
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
