<template>
    <v-app-bar app
               color="yggdrasilMain">
        <v-container class="pa-0 ma-0">
            <v-row dense align="center" justify="space-between">

                <!-- Логотип -->
                <v-col cols="auto">
                    <router-link to="/">
                        <v-img
                            alt="Vuetify Logo"
                            contain
                            class="header__logo"
                            :src="require('/src/assets/img/logo.png')"
                            :width="this.$vuetify.application.top - 5"/>
                    </router-link>
                </v-col>

                <!-- Меню -->
                <v-col cols="auto" lotr_dark>
                    <ListItemsMenu :menu="menu"/>
                </v-col>
            </v-row>
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
                    text: 'лотр',
                    link: '/lotr/',
                },
            ],
        } ),
    };

</script>

<style lang="scss" scoped>
  .header__logo {
    filter: invert(1);
  }
</style>
