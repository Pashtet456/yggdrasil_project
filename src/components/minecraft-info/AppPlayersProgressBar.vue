<template>
    <v-progress-linear
        rounded
        class="d-block"
        height="20">
        <strong>{{ minecraftServerUrl }}</strong>
    </v-progress-linear>
</template>

<script>
    export default {
        name: 'AppPlayersProgressBar',
        props: {
            minecraftServerUrl: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style scoped>

</style>
