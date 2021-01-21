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
                yggdrasilMain: '#000',
                yggdrasilError: '#000',
                lotrd: '#f2f',
                lotrError: '#f11',
            },
        },
        dark: true,
    },
},
);

