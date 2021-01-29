<template>
    <v-app-bar app>
        <v-container class="pa-0 ma-0 d-flex align-center header">
            <!-- Логотип -->
            <div class="header-logo__ygg d-flex align-center">
                <router-link to="/">
                    <v-img
                        alt="Vuetify Logo"
                        contain
                        :src="require('/src/assets/img/logo.png')"
                        :width="this.$vuetify.application.top - 5"/>
                </router-link>
                <span>Yggdrasil project</span>
            </div>
            <v-spacer/>
            <!-- Меню -->
            <div class="header-menu">
                <ListItemsMenu :menu="menu"/>
            </div>
            <v-spacer/>
            <!-- Логотип -->
            <div class="header-logo__vk">
                <router-link to="/">
                    <v-img
                        alt="Vuetify Logo"
                        contain
                        :src="require('/src/assets/img/vk.png')"
                        :width="this.$vuetify.application.top - 5"/>
                </router-link>
            </div>
            <!-- Логотип -->
            <div class="header-logo__dis">
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
    import ListItemsMenu from '../yggdrasil/Header/ListItemsMenu';

    export default {
        name: 'LotrHeader',
        components: {
            ListItemsMenu,
        },
        data: () => ( {
            menu: [
                {
                    text: 'Главная',
                    link: '/lotr/',
                },
                {
                    text: 'Правила',
                    link: '/lotr/donate',
                },
            ],
        } ),
    };

</script>

<style lang="scss" scoped>
  .header {
    max-width: 100%;
    &-logo__ygg {
      width: 118px;
      white-space: nowrap;
    }
  }
</style>
