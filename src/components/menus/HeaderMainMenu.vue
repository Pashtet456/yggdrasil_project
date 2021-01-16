<template>
    <list-items-menu :menu="currentMenu(menu)"/>
</template>

<script>
    import { mapState } from 'vuex';
    import ListItemsMenu from "./ListItemsMenu";

    export default {
        name: 'HeaderMainMenu',
        components: { ListItemsMenu },
        data: () => ( {
            menu: [
                [
                    'yggdrasil',
                    [
                        { text: 'Главная', link: '/' },
                        { text: 'Правила', link: '/lotr/main' },
                        { text: 'Донат', link: '/donate' },
                    ],
                ],
                [
                    'lotr',
                    [
                        { text: 'sdasd', link: '/' },
                        { text: 'asda', link: '/rules' },
                        { text: 'Донasdaат', link: '/donate' },
                    ],
                ],
            ],
        } ),
        methods: {
            currentMenu( projects ) {
                try {
                    for ( const key in projects ) {
                        if ( projects[key][0] === this.app.currentProject ) {
                            return projects[key][1];
                        }
                    }
                } catch ( e ) {
                    console.log( e );
                }
            },
        },
        computed: {
            ...mapState( ['app'] ),
        },
    };
</script>
