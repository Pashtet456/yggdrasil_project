<template>
    <v-form
        ref="form"
        class="d-flex flex-column"
        :style="values.styles" @submit.prevent="submit">
        <!-- стили в корневом не писать атомаркой, если писать, то отдельным классом + возмлжность изменить извне пропсами -->

        <slot v-if="isSuccess === true" name="successApiCall">
            <!-- seccess, потому что successApiCall излишен -->
            <div>{{ successAnswer }}</div><!-- не создавать ненужные блоки -->
        </slot>

        <slot v-if="isSuccess === false" name="nonSuccessApiCall">
            <div>
                {{ errorAnswer }}
                <v-btn v-if="values.canReRequest"
                       type="submit">
                    Повторить запрос
                </v-btn>
            </div>
        </slot>

        <slot name="header"></slot>

        <slot name="body" v-bind="{rules, masks}"></slot>

        <slot name="footer">
            <v-btn
                type="submit">
                Отправить
            </v-btn>
        </slot>

    </v-form>
</template>

<script>
    import { mapActions } from 'vuex';
    import router from '~/router';

    export default {
        name: 'AppForm',
        props: {
            values: {
                type: Object,
                required: true,
            },
        },
        data: function( vm ) {
            return {
                successAnswer: undefined,
                errorAnswer: undefined,
                isSuccess: undefined,
                rules: {
                    required: v => !!v || 'Обязательный',
                    min: v => v.length >= 4 || 'Минимум 4 символа',
                    email: v => !v || /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test( v ) || 'Некорректный Email',
                    checkboxConfirm: v => !!v || 'Подтвердите согласие',
                    password: v => !v || v.length >= 6 || 'Минимум 6 символов',
                    passwordConfirm: v => v === vm.values.password || 'Пароли не совпадают',
                },
                masks: {
                    email: {
                        showMaskOnHover: false,
                        alias: 'email',
                    },
                },
            };
        },
        computed: {

        },
        methods: {
            validate() {
                const result = this.$refs.form.validate();

                if ( !result ) return false;

                for ( const input of this.$refs.form.inputs ) {
                    if ( !input.valid ) {
                        window.scrollTo( {
                            top: input.$el.offsetTop,
                        } );
                        return false;
                    }
                }
                return true;
            },
            submit() {
                if ( !this.validate() ) return;//прочитать про async/await

                this.$axios.get( this.values.url )
                    .then( res => {
                        this.isSuccess = true;
                        this.$emit( 'update:success', this.successAnswer = res.data );
                    } )
                    .catch( e => {
                        this.$emit( 'update:error', this.errorAnswer = e );
                        this.isSuccess = false;
                    } );
            },
        },
    };
</script>

<style scoped>

</style>
