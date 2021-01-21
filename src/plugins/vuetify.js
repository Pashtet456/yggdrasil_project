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
                dark: '#2f4',
                primary: '#2f4',
                secondary: '#2f4',
                accent: '#2f4',
                error: '#2f4',
                lotrDark: '#f11',
            },
        },
        dark: true,
    },
},
);

