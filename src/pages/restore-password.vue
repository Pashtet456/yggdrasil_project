<template>
    <v-container class="yggdrasil-form">
        <restore-password-form/>
    </v-container>
</template>

<script>
    import RestorePasswordForm from '../components/RestorePasswordForm';
    export default {
        name: 'RePass',
        components: { RestorePasswordForm },
    };
</script>

<style scoped>

</style>
