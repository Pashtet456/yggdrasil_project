<template>
    <v-container class="yggdrasil-form">
        <AppAuthForm/>
    </v-container>
</template>

<script>
    import AppAuthForm from '~/components/forms/AppAuthForm';
    export default {
        name: 'Auth',
        components: { AppAuthForm },
    };
</script>

<style scoped>

</style>
