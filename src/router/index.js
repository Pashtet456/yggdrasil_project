import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from '../store/index';


Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YgdMain',
        component: () => import( '../views/yggdrasil/YggdrasilMain' ),
    },
    {
        path: '/rules',
        name: 'YgdRules',
        component: () => import( '../views/yggdrasil/YggdrasilRules' ),
    },
    {
        path: '/donate',
        name: 'YggDonate',
        component: () => import( '../views/yggdrasil/YggdrasilDonate' ),
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
