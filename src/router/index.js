import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from '../store/index';


Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YgdMain',
        component: () => import( 'src/views/yggdrasil/yggdrasil-main' ),
    },
    {
        path: '/rules',
        name: 'YgdRules',
        component: () => import( 'src/views/yggdrasil/yggdrasil-rules' ),
    },
    {
        path: '/donate',
        name: 'YgdDonate',
        component: () => import( 'src/views/yggdrasil/yggdrasil-donate' ),
    },
    {
        path: '/lotr/',
        name: 'LotrMain',
        component: () => import( 'src/views/lotr/lotr-main' ),
    },
    {
        path: '/lotr/donate',
        name: 'LotrDonate',
        component: () => import( 'src/views/lotr/lotr-donate' ),
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import( 'src/views/authorization' ),
    },
    {
        path: '/reg',
        name: 'Reg',
        component: () => import( 'src/views/registration' ),
    },
    {
        path: '/repass',
        name: 'RePass',
        component: () => import( 'src/views/restore-password' ),
    },
    {
        path: '/cabinet',
        name: 'Cabinet',
        component: () => import( 'src/views/cabinet' ),
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
