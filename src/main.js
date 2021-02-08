import Vue        from 'vue';
import '~/plugins/axios';
import App        from '~/App.vue';
import router     from '~/router';
import store      from '~/store';
import vuetify    from '~/plugins/vuetify';
import InputMask  from '~/plugins/inputmask';
import { $axios } from '~/plugins/axios';
import '~/assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = $axios;

new Vue( {
    router,
    store,
    vuetify,
    InputMask,
    render: h => h( App ),
} ).$mount( '#app' );
