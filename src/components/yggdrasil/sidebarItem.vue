<template>
    <div class="sidebar">
        <router-link to="/">
            <v-img
                alt="Vuetify Logo"
                contain
                :src="require('/src/assets/img/dis.png')"
                :width="this.$vuetify.application.top - 5"/>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'SidebarItem',
    };
</script>

<style scoped>

</style>
