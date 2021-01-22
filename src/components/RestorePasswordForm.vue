<template>
    <v-card class="pa-5" rounded>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            :class="this.$store.getters.currentProject === 'yggdrasil' ? 'yggdrasil_dark' : 'lotr_dark'"
            class="auth-form"
            @submit.prevent="submit">

            <v-text-field
                v-model="email"
                class="auth-form__text-field"
                :rules="[rules.required, rules.email]"
                label="Email"
                outlined/>

            <div class="auth-form__footer">
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate">
                    Отправить письмо
                </v-btn>
            </div>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        name: 'RestorePasswordForm',
        data: vm => ( {
            valid: false,
            email: '',
            rules: {
                required: v => !!v || 'Обязательный',
                email:  v => !v || /.+@.+\..+/.test( v ) || 'Некорректный email',
            },
        } ),

        methods: {
            validate() {
                this.$refs.form.validate();
            },
        },
    };
</script>

<style lang="scss">
  .auth-form {
    min-width: 400px;

    &__footer {
      align-items: center;
      display: flex;
      width: 100%;
    }
  }

</style>
