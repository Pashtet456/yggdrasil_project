<template>
    <app-form url="/api/auth/"
              :values="values"
              width="400"
              privacy-check
              submit-text="Войти">
        <template v-slot:header>
            Вход
        </template>

        <template v-slot:fields="{ rules }">
            <v-text-field v-model="email"
                          :rules="[rules.required, rules.email]"
                          outlined label="E-mail"/>

            <v-text-field v-model="password"
                          :rules="[rules.required]"
                          outlined label="Пароль"
                          :type="isShowPass ? 'text' : 'password'"
                          :append-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="isShowPass = !isShowPass"/>
        </template>

        <template v-slot:footer>
            <section class="list-mb-4">
                <v-divider/>

                <router-link to="/registration" class="text-decoration-none">
                    <v-btn color="primary" text block>
                        Забыли пароль?
                    </v-btn>
                </router-link>

                <v-divider/>

                <router-link to="/registration" class="text-decoration-none">
                    <v-btn color="primary" text block>
                        Зарегистрироваться
                    </v-btn>
                </router-link>
            </section>
        </template>
    </app-form>
</template>

<script>
    import AppForm from '~/components/forms/AppForm';

    export default {
        name: 'AppAuthForm',
        components: { AppForm },
        data: () => ( {
            email: null,
            password: null,
            isShowPass: false,
        } ),
        computed: {
            values: vm => ( {
                password: vm.password,
            } ),
        },
    };
</script>
