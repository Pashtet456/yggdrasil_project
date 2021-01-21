import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';

Vue.use( Vuetify );

export default new Vuetify( {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        customProperties: true,
        themes: {
            dark: {
                error: '',
                dark: '',
                primary: '',
                secondary: '',
                accent: '',
                yggdrasilMain: '#000',
                lotrError: '#f2f',
                lotrDark: '#f11',
            },
        },
        dark: true,
    },
},
);

