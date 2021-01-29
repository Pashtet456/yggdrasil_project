<template>
    <div class="sidebar">
        <router-link to="/lotr/">
            <v-img
                alt="Vuetify Logo"
                contain
                :src="require('/src/assets/img/dis.png')"
                :width="this.$vuetify.application.top - 5"/>
        </router-link>
    </div>
</template>
Pas
<script>
    export default {
        name: 'SidebarItem',
    };
</script>

<style scoped>

</style>
