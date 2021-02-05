import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from '~/store/index';

Vue.use( VueRouter );

const routes = [
    {
        path: '/',
        name: 'YggdrasilMain',
        component: () => import( '~/pages/yggdrasil/yggdrasil-main' ),
        meta: { title:'Главная' },
    },
    {
        path: '/rules',
        name: 'YggdrasilRules',
        component: () => import( '~/pages/yggdrasil/yggdrasil-rules' ),
    },
    {
        path: '/donate',
        name: 'YggdrasilDonate',
        component: () => import( '~/pages/yggdrasil/yggdrasil-donate' ),
    },
    {
        path: '/lotr/',
        name: 'LotrMain',
        component: () => import( '~/pages/lotr/lotr-main' ),
    },
    {
        path: '/lotr/donate',
        name: 'LotrDonate',
        component: () => import( '~/pages/lotr/lotr-donate' ),
    },
    {
        path: '/authorization',
        name: 'Authorization',
        component: () => import( '~/pages/authorization' ),
    },
    {
        path: '/registration',
        name: 'Registration',
        component: () => import( '~/pages/registration' ),
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import( '~/pages/forgot-password' ),
    },
    {
        path: '/cabinet',
        name: 'Cabinet',
        component: () => import( '~/pages/cabinet' ),
    },
];

const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
} );

router.beforeEach( ( to, from, next ) => {
    document.title = to.meta.title;

    if ( to.name.match( /Yggdrasil/ ) ) {
        Vuex.commit( 'changeCurrentProject','yggdrasil' );
    } else if ( to.name.match( /Lotr/ ) ) {
        Vuex.commit( 'changeCurrentProject', 'lotr' );
    } else if ( !from.name ) {
        Vuex.commit( 'changeCurrentProject','yggdrasil' );
    }
    next();
},
);

export default router;
