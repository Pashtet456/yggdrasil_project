<template>
    <v-app v-if="this.$store.getters.currentProject === 'yggdrasil'">
        <YggdrasilHeader/>
        <v-main class="weqsdfs">
            <router-view/>
        </v-main>
    </v-app>
    <v-app v-else-if="this.$store.getters.currentProject === 'lotr'">
        <YggdrasilHeader/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
    import YggdrasilHeader from "../src/components/yggdrasil/layout/YggdrasilHeader";

    export default {
        name: 'App',
        components: { YggdrasilHeader },
        data: () => ( {
        } ),

    };
</script>

<style lang="scss" scoped>
  .weqsdfs {
    max-width: 1200px;
    margin: auto;
  }
</style>
