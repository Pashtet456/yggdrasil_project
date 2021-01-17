<template>
  <v-app v-if="this.$store.state.app.currentProject === 'yggdrasil'">
    <AppHeader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <v-app v-else-if="this.$store.state.app.currentProject === 'lotr'">
    <AppHeader/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

  import AppHeader from "./components/layout/AppHeader";

  export default {
      name: 'App',
      components: { AppHeader },
      data: () => ( {
      } ),
  };
</script>
