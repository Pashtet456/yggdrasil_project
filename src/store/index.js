import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    namespaced: true,
    state: {
        user: {
            id: false,
            avatar: false,
            email: false,
            dateRegistration: undefined,
            dateLastVisit: undefined,
        },
        app: {
            currentProject: 'yggdrasil',
        },
    },
    mutations: {
        changeCurrentProject( state, project ) {
            if ( project === 'yggdrasil' ) {
                this.state.app.currentProject = 'yggdrasil';
            } else if ( project === 'lotr' ) {
                this.state.app.currentProject = 'lotr';
            }
        },
    },
    actions: {
    },
    modules: {
    },
} );
