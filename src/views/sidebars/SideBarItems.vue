<template>
    <div class="sidebar">
        <template v-if="position==='left'">
            <app-sidebar-items
                :items="items.slice(0,items.length/2)"
                position="left"/>
        </template>
        <template v-if="position==='right'">
            <app-sidebar-items
                :items="items.slice(items.length/2,items.length)"
                position="right"/>
        </template>
    </div>
</template>

<script>
    import AppSidebarItems from '~/components/sidebars/AppSideBarItems';
    export default {
        name: 'SidebarItems',
        components: { AppSidebarItems},
        props: {
            position: {
                type: String,
                default: 'left',
            },
        },
        data: function() {
            return {
                items: [
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '11',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '12',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '13',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '14',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '21',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '22',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '23',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '24',
                    },
                ],
            };
        },
    };
</script>
