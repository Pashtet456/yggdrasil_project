<template>
    <v-list class="d-flex pa-0 header__nav-menu">
        <v-list-item v-for="item in menu" :key="item.link" class="text--white">
            <router-link class="header__nav-item"
                         :to="item.link">
                {{ item.text }}
            </router-link>
        </v-list-item>
        <v-list-item>

            <!--Авторизованный пользователь-->
            <template v-if="userIsLogin">
                <v-layout align-center>
                    <app-user/>
                </v-layout>
            </template>

            <!--Не авторизованный пользователь-->
            <template v-else>
                <router-link to="/auth" class="header__nav-login header__nav-item">
                    Войти
                </router-link>
            </template>

        </v-list-item>
    </v-list>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'ListItemsMenu',
        props: {
            menu: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            ...mapGetters( ['userIsLogin'] ),
        },
    };
</script>


<style lang="scss" scoped>
  .header__nav {
    &-menu {
    background-color: transparent !important;
  }
    &-item {
      &:hover {
        color: gold;
        border-color: gold;
      }
  }
    &-login {
      border: 2px solid blue;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
</style>
