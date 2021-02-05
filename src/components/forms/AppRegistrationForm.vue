<template>
    <app-form url="/api/auth/"
              width="400"
              :values="values"
              submit-text="Зарегистрироваться">
        <template v-slot:header>
            <div class="text-left mb-2 text-h5">Регистрация</div>
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

            <v-text-field v-model="values.passwordConfirm"
                          :rules="[rules.required, rules.passwordConfirm]"
                          outlined label="Повторите пароль"
                          :type="values.isShowPass1 ? 'text' : 'password'"
                          :append-icon="values.isShowPass1 ? 'mdi-eye' : 'mdi-eye-off'"
                          @click:append="values.isShowPass1 = !values.isShowPass1"/>

            <v-checkbox v-model="values.checkbox"
                        :rules="[rules.privacy]"
                        class="mt-0 mb-4"
                        outlined label="Согласие с правилами сайта"
                        type="checkbox"/>
        </template>


        <template v-slot:footer>
            <section class="list-mb-4">

                <router-link to="/authorization" class="text-decoration-none">
                    <v-btn color="primary" text block>
                        Войти
                    </v-btn>
                </router-link>
            </section>
        </template>
    </app-form>
</template>

<script>
    import AppForm from '~/components/forms/AppForm';

    export default {
        name: 'AppRegistrationForm',
        components: { AppForm },
        data: () => ( {
            values: {
                email: null,
                password: null,
                passwordConfirm: null,
                checkbox: null,
                isShowPass: false,
                isShowPass1: false,
            },
        } ),
    };
</script>
