<template>
    <v-app v-if="this.$store.getters.currentProject === 'yggdrasil'" class="v-app">
        <v-navigation-drawer class="v-navigation-drawer">
            <div>sdassddasd</div>
        </v-navigation-drawer>
        <YggdrasilHeader class="yggdrasil_dark"/>
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

<style lang="scss">
  .weqsdfs {
    max-width: 1200px;
    margin: auto;
  }

  .v-application .yggdrasil_dark {
    & .error--text {
      color: red !important;
    }
    & .primary--text {
      color: greenyellow !important;
    }
    & a {
      color: sandybrown !important;
        &:hover {
          color: cornflowerblue !important;
        }
    }
  }
  .v-navigation-drawer {
    position: absolute;
  }
  .v-app {
    position: relative;
  }
</style>
