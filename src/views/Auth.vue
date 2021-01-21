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

            <v-text-field
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.password, rules.required]"
                :type="show ? 'text' : 'password'"
                label="password"
                outlined
                @click:append="show = !show"/>

            <v-text-field
                v-model="passwordConfirm"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.passwordConfirm, rules.required]"
                :type="show1 ? 'text' : 'password'"
                label="passwordConfirm"
                outlined
                @click:append="show1 = !show1"/>

            <v-checkbox
                v-model="checkbox"
                :rules="[rules.checkboxConfirm]"
                label="Правила сайта"/>

            <div class="auth-form__footer">
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate">
                    Validate
                </v-btn>
                <v-spacer/>
                <router-link to="/auth" class="header__nav-login header__nav-item">
                    Регистрация
                </router-link>
            </div>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        name: 'Auth',
        data: vm => ( {
            valid: false,
            email: '',
            show: false,
            show1: false,
            password: '',
            passwordConfirm: '',
            checkbox: false,
            rules: {
                required: v => !!v || 'Обязательный',
                min: v => v.length >= 8 || 'Минимум 8 символов',
                email:  v => !v || /.+@.+\..+/.test( v ) || 'Некорректный email',
                password: v => {
                    if ( !v ) return true;
                    if ( !/^[a-zA-Z0-9]+$/.test( v ) ) {
                        return 'Пароль должен содержать только латинские буквы и цифры';
                    }
                    if ( v.length < 6 ) {
                        return 'Пароль должен быть не менее 6 символов';
                    }
                    if ( !/(?=.*[0-9])/.test( v ) ) {
                        return 'Пароль должен содержать цифры';
                    }
                    if ( !/(?=.*[a-zA-Z])/.test( v ) ) {
                        return 'Пароль должен содержать латинские буквы';
                    }
                    return true;
                },
                passwordConfirm:  v => {
                    if ( !vm.password ) return 'Введите пароль';
                    if ( v !== vm.password ) return 'Пароли должны совпадать';
                },
                checkboxConfirm: v => !!v || 'Подтвердите согласие',
            },
        } ),

        methods: {
            validate() {
                this.$refs.form.validate();
            },
            reset() {
                this.$refs.form.reset();
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
