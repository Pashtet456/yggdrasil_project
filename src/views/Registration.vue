<template>
    <v-container class="yggdrasil-form">
        <registration-form/>
    </v-container>
</template>

<script>
    import RegistrationForm from '../components/RegistrationForm';
    export default {
        name: 'Registration',
        components: { RegistrationForm },
    };
</script>

<style scoped>

</style>
