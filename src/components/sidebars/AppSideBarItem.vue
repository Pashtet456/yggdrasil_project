<template>
    <router-link :to="link">
        <v-img :src="require(`/src/assets/img/${source}`)"
               height="100"
               width="100"/>
    </router-link>
</template>

<script>
    export default {
        name: 'AppSideBarItem',
        props: {
            link: {
                type: String,
                default: '/',
            },
            source: {
                type: String,
                default: 'logo.png',
            },
        },
    };
</script>

<style scoped>

</style>
