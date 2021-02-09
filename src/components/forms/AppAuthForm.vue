<template>
    <app-form url="/api/auth/"
              width="400"
              privacy-check
              :values="values"
              submit-text="Войти">
        <template v-slot:header>
            <div class="text-left mb-2">Вход</div>
        </template>

        <template v-slot:fields="{ rules }">
            <v-text-field v-model="values.email"
                          :rules="[rules.required, rules.email]"
                          outlined label="E-mail"/>

            <v-text-field v-model="values.password"
                          :rules="[rules.required]"
                          outlined label="Пароль"
                          :type="values.isShowPass ? 'text' : 'password'"
                          :append-icon="values.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="values.isShowPass = !values.isShowPass"/>
        </template>

        <template v-slot:footer>
            <section class="list-mb-4">
                <v-divider/>

                <router-link to="/forgot-password" class="text-decoration-none">
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
            values: {
                email: null,
                password: null,
                isShowPass: false,
            },
        } ),
    };
</script>
