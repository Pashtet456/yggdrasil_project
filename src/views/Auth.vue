<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation>

        <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="Email"/>

        <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.password, rules.required]"
            :type="show ? 'text' : 'password'"
            label="password"
            @click:append="show = !show"/>

        <v-text-field
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.passwordConfirm]"
            :type="show ? 'text' : 'password'"
            label="passwordConfirm"
            @click:append="show = !show"/>

        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required/>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate">
            Validate
        </v-btn>

        <v-btn
            color="error"
            class="mr-4"
            @click="reset">
            Reset Form
        </v-btn>

    </v-form>
</template>

<script>
    export default {
        name: 'Auth',
        data: () => ( {
            valid: true,
            email: '',
            show: false,
            checkbox: false,
            rules: {
                required: value => !!value || 'Обязательный.',
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
                passwordConfirm: v => v === $values.password || 'Пароли должны совпадать',
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
