<template>
    <list-items-menu :menu="currentMenu(menu)"/>
</template>

<script>
    import { mapState } from 'vuex';
    import ListItemsMenu from "./ListItemsMenu";

    export default {
        name: 'HeaderMainMenu',
        components: { ListItemsMenu },
        props: {
            menu: {
                type: Array,
            },
        },
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
