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
                v-model="nickname"
                class="auth-form__text-field"
                :rules="[rules.required, rules.nickname, rules.min]"
                label="Ник"
                outlined/>

            <v-checkbox
                v-model="checkbox"
                :rules="[rules.checkboxConfirm]"
                label="Я понимаю, что ..."/>

            <div class="auth-form__footer">
                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="validate">
                    Войти
                </v-btn>
            </div>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        name: 'LotrMain',
        data: vm => ( {
            valid: false,
            nickname: '',
            checkbox: false,
            rules: {
                required: v => !!v || 'Обязательный',
                min: v => v.length >= 4 || 'Минимум 4 символа',
                nickname:  v => !v || !/\d+/.test( v ) || 'Некорректный Ник',
                checkboxConfirm: v => !!v || 'Подтвердите согласие',
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
