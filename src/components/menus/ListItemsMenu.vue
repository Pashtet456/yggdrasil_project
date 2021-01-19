<template>
    <v-list class="d-flex pa-0">
        <v-list-item v-for="item in menu" :key="item.link"
                     link>
            <router-link
                :to="item.link">
                {{ item.text }}
            </router-link>
        </v-list-item>
        <v-list-item link>

            <!--Авторизованный пользователь-->
            <template v-if="userIsLogin">
                <v-layout align-center>
                    <app-user/>
                </v-layout>
            </template>

            <!--Не авторизованный пользователь-->
            <template v-else>
                <router-link to="">
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
