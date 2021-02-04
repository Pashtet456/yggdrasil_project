<template>
    <div class="l-form">
        <!-- Форма -->
        <v-form ref="form"
                @submit.prevent="submit">
            <!-- Хэдер -->
            <slot name="header"></slot>
            <!-- Тело формы -->
            <slot name="body"
                  v-bind="{ rules, loading, submit, clear, error: dataError, errorMessage, isUserError }">
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
            <!-- Успешная отправка формы -->
            <div v-if="!inlineSuccessMessage && isSuccess"
                 class="l-form-success list-mb-6">
                <v-icon color="success" size="60"
                        class="d-flex mx-auto mb-4">
                    mdi-check-circle
                </v-icon>

                <slot name="success" v-bind="{ reload }"></slot>
            </div>

            <!-- Неудачная отправка формы -->
            <div v-if="!inlineErrorMessage && dataError"
                 class="l-form-error list-mb-6">
                <v-icon color="red" size="60"
                        class="mb-4">
                    mdi-close-circle
                </v-icon>

                <slot name="error" v-bind="{ error: dataError, errorMessage, isUserError, reload }">
                    <div class="text-h5 mb-4">Ошибка</div>

                    <p v-if="isUserError"
                       class="text-body-2">
                        {{ errorMessage }}
                    </p>

                    <template v-else>
                        <p class="text-body-2">
                            Произошла непредвиденная ошибка.
                            Напишите или позвоните нам.
                        </p>

                        <a :href="`tel:${ $legacy.constants.SITE_PHONE }`"
                           class="d-block text-subtitle-1 link--unstyled">
                            {{ $legacy.constants.SITE_PHONE_FORMAT }}
                        </a>
                    </template>

                    <v-btn color="primary" small
                           @click="reload">
                        Попробовать ещё раз
                    </v-btn>
                </slot>
            </div>

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
            error: {
                type: Error,
                default: null,
            },
            inlineSuccessMessage: {
                type: Boolean,
                default: true,
            },
            inlineErrorMessage: {
                type: Boolean,
                default: true,
            },
        },
        data: vm => ( {
            loading: false,
            privacy: false,
            isSuccess: false,
            dataError: vm.error,
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
        computed: {
            errorMessage: vm => {
                if ( vm.dataError === null ) {
                    return null;
                } else if ( vm.dataError instanceof UserError ) {
                    return vm.dataError.message;
                } else {
                    return 'Произошла ошибка';
                }
            },
            isUserError: vm => ( vm.dataError && vm.dataError instanceof UserError ),
        },
        watch: {
            error( value ) {
                if ( value instanceof Error ) {
                    this.dataError = value;
                }
            },
        },
        methods: {
            submit() {
                setTimeout( async() => {
                    try {
                        this.reload();

                        if ( !this.$refs.form.validate() ) return;

                        this.$emit( 'update:loading', this.loading = true );

                        this.isSuccess = true;
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
                this.isSuccess = false;
                this.$emit( 'update:error', this.dataError = null );
            },
            clear() {
                this.$refs.form.reset();
            },
        },
    };
</script>

<style lang="scss" scoped>
    .l-form-inner {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .l-form-message {
        min-height: 16px;
        font-size: 11px;
        font-weight: 500;
        margin: 8px 0;
    }
</style>
