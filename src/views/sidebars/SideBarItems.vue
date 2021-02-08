<template>
    <div class="sidebar">
        <template v-if="position==='left'">
            <app-sidebar-items
                :items="items"
                position="left"/>
        </template>
        <template v-if="position==='right'">
            <app-sidebar-items
                :items="items"
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
                        minecraftServerUrl: '123',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '3',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '545',
                    },
                    {
                        source: 'logo.png',
                        link: '/lotr',
                        minecraftServerUrl: '123123',
                    },
                ],
            };
        },
    };
</script>
