<template>
    <v-app v-if="this.$store.getters.currentProject === 'yggdrasil'">
        <YggdrasilHeader class="yggdrasil yggdrasil-header"/>
        <v-main>
            <v-container class="yggdrasil yggdrasil-main">
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
    <v-app v-else-if="this.$store.getters.currentProject === 'lotr'">
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
  .v-application .yggdrasil {
    &-main {
      max-width: 1200px;
      margin: auto;
      text-align: center;
    }
    &-form {
      max-width: 500px;
      margin-top: 50px;
    }
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
