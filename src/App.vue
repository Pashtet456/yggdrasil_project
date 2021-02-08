<template>
    <v-app v-if="currentProject === 'yggdrasil'" class="yggdrasil">
        <yggdrasil-header class="header"/>
        <v-main class="main">
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
        <alert class="alert"/>
        <side-bar-items position="left" class="sidebar"/>
        <side-bar-items position="right" class="sidebar"/>
    </v-app>
    <v-app v-else-if="currentProject === 'lotr'" class="lotr">
        <lotr-header class="header"/>
        <v-main class="main">
            <router-view/>
        </v-main>
        <alert class="alert"/>
    </v-app>
</template>

<script>
    import YggdrasilHeader from '~/layouts/yggdrasil/yggdrasil-header';
    import LotrHeader      from '~/layouts/lotr/lotr-header';
    import Alert           from '~/views/alerts/Alert';
    import SideBarItems    from '~/views/sidebars/SideBarItems';
    import { mapGetters }  from 'vuex';

    export default {
        name: 'App',
        components: { SideBarItems, Alert, LotrHeader, YggdrasilHeader },
        data: () => ( {} ),
        computed: {
            ...mapGetters( 'app', [ 'currentProject' ] ),
        },
    };
</script>

<style lang="scss">

</style>
