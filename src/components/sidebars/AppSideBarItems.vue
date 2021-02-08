<template>
    <v-list class="side-bar-main
            d-flex flex-column
            justify-space-between
            transparent" :class="position==='left'?'side-bar-main--left':position==='right'?'side-bar-main--right':''">
        <v-list-item
            v-for="(item, i) in items"
            :key="item[i]"
            class="pa-0">
            <app-side-bar-item
                :link="item.link"
                :source="item.source"
                class="side-bar-item"
                :class="position==='left'?'side-bar-item--left'
                    :position==='right'?'side-bar-item--right':''"/>
            <app-side-bar-cloud
                class="side-bar-cloud"
                :minecraft-server-url="item.minecraftServerUrl"/>
        </v-list-item>
    </v-list>
</template>

<script>
    import AppSideBarItem  from '~/components/sidebars/AppSideBarItem';
    import AppSideBarCloud from '~/components/sidebars/AppSideBarCloud';
    export default {
        name: 'AppSidebarItems',
        components: { AppSideBarCloud, AppSideBarItem },
        props: {
            items: {
                type: Array,
                default: () => [{
                    link: "/",
                    source: "logo.png",
                }],
            },
            position: {
                type: String,
                default: 'left',
            },
            minecraftServerUrl: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style scoped lang="scss">
    .side-bar {
        &-main {
            height: 100%;
            position: fixed;
            top: 0;

            &--left {
                left: -50px;
            }
            &--right {
                right: -50px;
            }
        }
        &-cloud {
            transition: 1s opacity, 1s transform;
            opacity: 0;
        }
        &-item {
            order: 2;
            transition: 1s transform;

            &--left {
                & ~ .side-bar-cloud {
                    order: 2;
                }
                &:hover {
                    transform: translateX(50px);
                    & ~ .side-bar-cloud {
                        opacity: 1;
                        transform: translateX(50px);
                    }
                }
            }
            &--right {
                &:hover {
                    transform: translateX(-50px);
                    & ~ .side-bar-cloud {
                        opacity: 1;
                        transform: translateX(-50px);
                    }
                }
            }
        }
    }
</style>
