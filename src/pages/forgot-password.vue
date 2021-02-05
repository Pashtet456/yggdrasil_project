<template>
    <v-container class="yggdrasil-form">
        <app-forgot-passport-form/>
    </v-container>
</template>

<script>
    import AppForgotPassportForm from '~/components/forms/AppForgotPasswordForm';
    export default {
        name: 'RePass',
        components: { AppForgotPassportForm },
    };
</script>

<style scoped>

</style>
