import Vue    from 'vue';
import Vuex   from 'vuex';
import user   from './user';
import app    from './app';
import ui from './ui';

Vue.use( Vuex );

export default new Vuex.Store( {
    namespaced: true,
    modules: {
        user,
        app,
        ui,
    },
} );
