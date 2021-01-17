import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use( Vuetify );

export default new Vuetify( {
    theme: {
        themes: {
            dark: {
                dark: '#2f4',
                primary: '#2f4',
                secondary: '#2f4',
                accent: '#2f4',
                error: '#2f4',
            },
        },
        dark: true,
    },
},
);

