<template>
    <v-card class="ma-auto" rounded width="500px">
        <app-nick-name-input-form/>
    </v-card>
</template>

<script>
    import AppNickNameInputForm from '~/components/forms/AppNickNameInputForm';
    export default {
        name: 'LotrMain',
        components: { AppNickNameInputForm },
    };
</script>

<style lang="scss">

</style>
