<template>
    <v-app-bar app
               class="header">
                <!-- Логотип
                <v-col lg="auto">
                    <router-link to="/"
                                 class="d-flex justify-center justify-lg-start">
                       <picture>
                           <source srcset="~/assets/img/logo-lg.png" media="(min-width: 992px)">
                           <img class="header__logo" src="~/assets/img/logo-xs.png" alt="Logo">
                       </picture>

                   </router-link>
               </v-col>
                -->
               <!-- Меню -->
        <HeaderMainMenu/>
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
    </v-app-bar>
</template>

<script>
    import HeaderMainMenu from "../menus/HeaderMainMenu";

    export default {
        name: 'AppHeader',
        components: { HeaderMainMenu },
    };
</script>
