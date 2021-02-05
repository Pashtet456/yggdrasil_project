<template>
    <app-form url="/api/auth/"
              width="400"
              :values="values"
              submit-text="Отправить письмо">
        <template v-slot:header>
            <div class="text-left mb-2 text-h5">Восстановление пароля</div>
        </template>

        <template v-slot:fields="{ rules }">
            <v-text-field v-model="values.email"
                          :rules="[rules.required, rules.email]"
                          outlined label="E-mail"/>

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
        name: 'AppForgotPassportForm',
        components: { AppForm },
        data: () => ( {
            values: {
                email: null,
            },
        } ),
    };
</script>
