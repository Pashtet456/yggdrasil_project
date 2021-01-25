import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    namespaced: true,
    state: {
        user: {
            id: undefined,
            awardCoins: undefined,
            realCoins: undefined,
            avatar: undefined,
            email: undefined,
            dateRegistration: undefined,
            dateLastVisit: undefined,
        },
        app: {
            project: 'yggdrasil',
        },
    },
    getters: {
        userIsLogin: state => state.user.id !== undefined,
    },
    mutations: {
        changeCurrentProject( state, project ) {
            if ( project === 'yggdrasil' ) {
                this.state.app.project = 'yggdrasil';
            } else if ( project === 'lotr' ) {
                this.state.app.project = 'lotr';
            }
        },
    },
    actions: {
    },
    modules: {
    },
} );
