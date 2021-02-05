<template>
    <v-container class="yggdrasil-form">
        <app-registration-form/>
    </v-container>
</template>

<script>
    import AppRegistrationForm from '~/components/forms/AppRegistrationForm';
    export default {
        name: 'Registration',
        components: { AppRegistrationForm },
    };
</script>

<style scoped>

</style>
