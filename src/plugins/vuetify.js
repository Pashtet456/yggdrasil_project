import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use( Vuetify );

export default new Vuetify( {
    theme: {
        themes: {
            dark: {
                dark: '#222',
                primary: '#222',
                secondary: '#333',
                accent: '#444',
                error: '#222',
            },
        },
        dark: true,
    },
},
);

