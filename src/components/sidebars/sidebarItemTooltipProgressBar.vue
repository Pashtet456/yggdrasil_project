<template>
    <v-progress-linear
        v-model="onlinePlayers"
        rounded
        class="sidebar-item-cloud__progress-bar"
        height="30">
        <strong>{{ Math.ceil(onlinePlayers) }}%</strong>
    </v-progress-linear>
</template>

<script>
    export default {
        name: 'SidebarItemTooltipProgressBar',
        data: function() {
            return {
                onlinePlayers: 55,
            };
        },
    };
</script>

<style scoped>

</style>
