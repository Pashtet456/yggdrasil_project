<template>
    <v-app v-if="currentProject === 'yggdrasil'" class="yggdrasil">
        <yggdrasil-header/>
        <v-main :style="'background: url(' + require('/src/assets/img/yggdrasilMainBg.webp') + ') no-repeat center center fixed !important;' ">
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
        <alert/>
        <side-bar-items position="left"/>
        <side-bar-items position="right"/>
    </v-app>
    <v-app v-else-if="currentProject === 'lotr'" class="lotr">
        <lotr-header/>
        <v-main>
            <router-view/>
        </v-main>
        <alert/>
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
