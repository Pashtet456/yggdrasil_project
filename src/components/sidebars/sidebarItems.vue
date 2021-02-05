<template>
    <v-list class="sidebarItems
            d-flex flex-column
            justify-space-between
            transparent">
        <v-list-item
            v-for="(item, i) in items"
            :key="item[i]"
            class="ma-0 pa-0 d-block sidebar-item-tooltip">
            asdasa
            <v-tooltip right>
                <template v-slot:activator="{ on }">
                    <router-link :to="items.link">
                        <v-img :src="require(`/src/assets/img/logo.png`)"
                               height="100"
                               width="100" v-on="on"/>
                    </router-link>
                </template>
                <template v-slot:default ref="tooltip">
                    <span>Server bla-bla</span>
                    <sidebar-item-tooltip-progress-bar class="sidebar-item-cloud__progress-bar"/>
                </template>
            </v-tooltip>
        </v-list-item>
    </v-list>
</template>

<script>
    import SidebarItemTooltipProgressBar from '~/components/sidebars/sidebarItemTooltipProgressBar';
    export default {
        name: 'SidebarItems',
        components: { SidebarItemTooltipProgressBar },
        data: function() {
            return {
                items: [
                    {
                        imageName: 'logo.png',
                        link: '/lotr',
                    },
                    {
                        imageName: 'logo.png',
                        link: '/lotr',
                    },
                    {
                        imageName: 'logo.png',
                        link: '/lotr',
                    },
                    {
                        imageName: 'logo.png',
                        link: '/lotr',
                    },
                ],
            };
        },
    };
</script>

<style scoped lang="scss">
    .sidebarItems {
        position: absolute;
        top: 60px;
        bottom: 0;
        left: -50px;
    }
</style>
