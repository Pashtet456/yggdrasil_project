import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from "../store/index";

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
        props: {
            theme: this,
        },
    },
    {
        path: '/donate',
        name: 'LotrMain1',
        component: () => import( '../views/yggdrasil/YgdDonate' ),
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
    console.log( from );
    if ( to.name.match( /Ygd/ ) ) {
        if ( Vuex.state.app.currentProject !== 'yggdrasil' ) {
            Vuex.commit( 'changeCurrentProject', 'yggdrasil' );
        }
        next();
    } else if ( to.name.match( /Lotr/ ) ) {
        if ( Vuex.state.app.currentProject !== 'lotr' ) {
            Vuex.commit( 'changeCurrentProject', 'lotr' );
        }
        next();
    } else {
        next();
    }
},
);

export default router;
