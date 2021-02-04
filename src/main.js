import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import InputMask from './plugins/inputmask';

Vue.config.productionTip = false;

new Vue( {
    router,
    store,
    vuetify,
    InputMask,
    render: h => h( App ),
} ).$mount( '#app' );
