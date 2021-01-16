<template>
  <v-app-bar app
             color="dark">
    <v-container class="pa-0 ma-0">
      <v-row dense align="center" justify="space-between">

        <!-- Логотип -->
        <v-col cols="auto">
            <router-link to="/">
              <v-img
                alt="Vuetify Logo"
                contain
                :src="require('/src/assets/img/logo.webp')"
                :width="this.$vuetify.application.top - 5"
              />
            </router-link>
        </v-col>

        <!-- Меню -->
        <v-col cols="auto">
          <HeaderMainMenu :menu="menu"/>
        </v-col>
        <!--
            <v-col cols="auto">
              Авторизованный пользователь
              <template v-if="userIsLogin">
                  <v-layout align-center="">
                      <app-user/>
                  </v-layout>
              </template>

              Не авторизованный пользователь
              <template v-else>
                  <v-btn color="primary" text
                         @click="showAppDialog('auth')">
                      Войти
                  </v-btn>
              </template>
          </v-col>
          -->
        </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  import HeaderMainMenu from '../menus/HeaderMainMenu';

  export default {
      name: 'AppHeader',
      components: { HeaderMainMenu },
      data: () => ( {
          menu: [
              [
                  'yggdrasil',
                  [
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
              ],
              [
                  'lotr',
                  [
                      {
                          text: 'Главная',
                          link: '/lotr/',
                      },
                      {
                          text: 'Донат',
                          link: '/lotr/donate',
                      },
                  ],
              ],
          ],
      } ),
  };
</script>
