<template>
    <div class="sidebar-cloud text-center">
        <span>Lotr</span>
        <v-divider class="pt-1 pb-1"/>
        <app-players-progress-bar :minecraft-server-url="minecraftServerUrl"/>
    </div>
</template>

<script>
    import AppPlayersProgressBar from '~/components/minecraft-info/AppPlayersProgressBar';
    export default {
        name: 'AppSideBarCloud',
        components: { AppPlayersProgressBar },
        props: {
            minecraftServerUrl: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style scoped lang="scss">
    .sidebar-cloud {
        height: 80px;
        width: 150px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #1e88e5;
        padding: 10px;
    }
</style>
