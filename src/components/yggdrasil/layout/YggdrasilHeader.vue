<template>
    <v-app-bar app>
        <v-container class="pa-0 ma-0 d-flex align-center header">
            <!-- Логотип -->
            <div class="header-logo">
                <router-link to="/">
                    <v-img
                        alt="Vuetify Logo"
                        contain
                        :src="require('/src/assets/img/logo.png')"
                        :width="this.$vuetify.application.top - 5"/>
                </router-link>
            </div>
            <v-spacer/>
            <!-- Меню -->
            <div class="header-menu">
                <ListItemsMenu :menu="menu"/>
            </div>
            <v-spacer/>
            <!-- Логотип -->
            <div class="header-logo">
                <router-link to="/">
                    <v-img
                        alt="Vuetify Logo"
                        contain
                        :src="require('/src/assets/img/vk.png')"
                        :width="this.$vuetify.application.top - 5"/>
                </router-link>
            </div>
            <!-- Логотип -->
            <div class="header-logo">
                <router-link to="/">
                    <v-img
                        alt="Vuetify Logo"
                        contain
                        :src="require('/src/assets/img/dis.png')"
                        :width="this.$vuetify.application.top - 5"/>
                </router-link>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script>
    import ListItemsMenu from '../Header/ListItemsMenu';

    export default {
        name: 'AppHeader',
        components: {
            ListItemsMenu,
        },
        data: () => ( {
            menu: [
                {
                    text: 'Главная',
                    link: '/',
                },
                {
                    text: 'Правила',
                    link: '/rules',
                },
                {
                    text: 'Донат',
                    link: '/donate',
                },
            ],
        } ),
    };

</script>

<style lang="scss" scoped>
  .header {
    max-width: 100%;
  }
</style>
