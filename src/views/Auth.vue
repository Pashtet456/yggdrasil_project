<template>
    <v-container class="yggdrasil-form">
        <auth-form/>
    </v-container>
</template>

<script>
    import AuthForm from '../components/AuthForm';
    export default {
        name: 'Auth',
        components: { AuthForm },
    };
</script>

<style scoped>

</style>
