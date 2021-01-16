import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store( {
    namespaced: true,
    state: {
        isAuth: false,
        app: {
            currentProject: 'yggdrasil',
            primary: '#fff',
        },
    },
    getters: {
    },
    mutations: {
        changeCurrentProject( state, project ) {
            this.state.app.currentProject = project;
            this.
        },
    },
    actions: {
    },
    modules: {
    },
} );
