<template>
    <v-container class="yggdrasil-form">
        <restore-password-form/>
    </v-container>
</template>

<script>
    import RestorePasswordForm from '../components/RestorePasswordForm';
    export default {
        name: 'RestorePassword',
        components: { RestorePasswordForm },
    };
</script>

<style scoped>

</style>
