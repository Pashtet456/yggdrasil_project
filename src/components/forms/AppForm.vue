<template>
    <div class="l-form">
        <!-- Форма -->
        <v-form ref="form"
                @submit.prevent="submit">
            <!-- Хэдер -->
            <slot name="header"></slot>
            <!-- Тело формы -->
            <slot name="body"
                  v-bind="{ rules, loading, submit, clear }">
                <!-- Поля формы -->
                <slot name="fields" v-bind="{ rules, loading }"></slot>

                <!-- Кнопка "Отправить" -->
                <slot name="submit" v-bind="{ loading, submit }">
                    <v-btn ref="submit"
                           block
                           :loading="loading" type="submit">
                        {{ submitText }}
                    </v-btn>
                </slot>
            </slot>

            <!-- Футер -->
            <slot name="footer"></slot>
        </v-form>
    </div>
</template>

<script>
    import { UserError }  from '~/lib/classes/error';

    export default {
        name: 'AppForm',
        props: {
            url: {
                type: String,
                required: true,
            },
            method: {
                type: String,
                default: null,
            },
            passApiKey: {
                type: Boolean,
                default: false,
            },
            values: {
                type: Object,
                required: true,
            },
            submitText: {
                type: String,
                default: 'Отправить',
            },
        },
        data: vm => ( {
            loading: false,
            privacy: false,
            rules: {
                required: v => {
                    const isEmpty = (
                        v === null ||
                        ( typeof v === 'string' && v.length === 0 ) ||
                        ( Array.isArray( v ) && v.length === 0 ) ||
                        false
                    );

                    return !isEmpty || 'Обязательное поле';
                },
                phone: v => !v || v.length === 10 || 'Телефон не может быть меньше 10 символов',
                email: v => !v || /.+@.+\..+/.test( v ) || 'Некорректный email',
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
                passwordConfirm: v => !vm.values.password || v === vm.values.password || 'Пароли должны совпадать',
                privacy: v => !!v || 'Вы должны согласиться, чтобы продолжить!',
            },
        } ),
        methods: {
            submit() {
                setTimeout( async() => {
                    try {
                        this.reload();

                        if ( !this.$refs.form.validate() ) return;

                        this.$emit( 'update:loading', this.loading = true );
                        const result = await this.$http.get( this.url );

                        this.$emit( 'success', result );
                    } catch ( e ) {
                        if ( !( e instanceof UserError ) ) {
                            console.log( e.message );
                        }

                        this.$emit( 'update:error', this.dataError = e );
                    } finally {
                        setTimeout( () => {
                            this.$emit( 'update:loading', this.loading = false );
                        }, 500 );
                    }
                }, 0 );
            },
            reload() {
                this.$emit( 'update:error', this.dataError = null );
            },
            clear() {
                this.$refs.form.reset();
            },
        },
    };
</script>

<style lang="scss" scoped>

</style>
