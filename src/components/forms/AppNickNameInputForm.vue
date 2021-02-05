<template>
    <app-form url="/api/auth/"
              width="400"
              :values="values"
              submit-text="Сохранить">
        <template v-slot:header>
            <div class="text-left mb-2 text-h5">Введите Никнейм</div>
        </template>

        <template v-slot:fields="{ rules }">
            <v-text-field v-model="values.name"
                          :rules="[rules.required, rules.name]"
                          outlined label="Никнейм"/>

            <v-checkbox v-model="values.checkbox"
                        :rules="[rules.privacy]"
                        class="mt-0 mb-4"
                        outlined label="Я понимаю, что этот никнейм нельзя будет изменить бесплатно."
                        type="checkbox"/>
        </template>
    </app-form>
</template>

<script>
    import AppForm from '~/components/forms/AppForm';

    export default {
        name: 'AppNickNameInputForm',
        components: { AppForm },
        data: () => ( {
            values: {
                name: null,
                checkbox: null,
            },
        } ),
    };
</script>

