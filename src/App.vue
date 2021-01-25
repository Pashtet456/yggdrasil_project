<template>
    <v-app v-if="currentProject === 'yggdrasil'">
        <YggdrasilHeader class="yggdrasil yggdrasil-header"/>
        <sidebar-item class="sidebar"/>
        <v-main>
            <v-container class="yggdrasil yggdrasil-main">
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
    <v-app v-else-if="currentProject === 'lotr'">
        <LotrHeader/>
        <v-main>
            <router-view/>
        </v-main>
    </v-app>
</template>

<script>
    import YggdrasilHeader from "../src/components/yggdrasil/layout/YggdrasilHeader";
    import SidebarItem     from '../src/components/yggdrasil/sidebarItem';
    import LotrHeader      from '../src/components/lotr/LotrHeader';

    export default {
        name: 'App',
        components: { LotrHeader, SidebarItem, YggdrasilHeader },
        data: () => ( {
        } ),
        computed: {
            currentProject() {
                return this.$store.state.app.project;
            },
        },
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
  .sidebar {
    z-index: 9999;
    top: 100px;
    position: absolute;
  }
</style>
