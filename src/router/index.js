import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from '../store/index';


Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YgdMain',
        component: () => import( '../views/yggdrasil/YgdMain' ),
    },
    {
        path: '/rules',
        name: 'YgdRules',
        component: () => import( '../views/yggdrasil/YgdRules' ),
    },
    {
        path: '/donate',
        name: 'LotrMain',
        component: () => import( '../views/lotr/LotrMain' ),
    },
    {
        path: '/lotr/',
        name: 'LotrMain',
        component: () => import( '../views/lotr/LotrMain' ),
    },
    {
        path: '/lotr/donate',
        name: 'LotrDonate',
        component: () => import( '../views/lotr/LotrDonate' ),
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
    } else if ( to.name.match( /Lotr/ ) ) {
        Vuex.commit( 'changeCurrentProject', 'lotr' );
    }
    next();
},
);

export default router;
