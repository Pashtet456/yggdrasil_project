<template>
    <v-app v-if="currentProject === 'yggdrasil'">
        <YggdrasilHeader class="yggdrasil yggdrasil-header"/>
        <v-main>
            <v-container class="yggdrasil yggdrasil-main">
                <router-view/>
            </v-container>
        </v-main>
        <alert/>
        <sidebar-items/>
    </v-app>
    <v-app v-else-if="currentProject === 'lotr'">
        <LotrHeader/>
        <v-main>
            <router-view/>
        </v-main>
        <alert/>
    </v-app>
</template>

<script>
    import YggdrasilHeader from "~/layouts/yggdrasil/yggdrasil-header";
    import LotrHeader      from '~/layouts/lotr/lotr-header';
    import Alert           from '~/views/alerts/Alert';
    import SidebarItems    from '~/components/sidebars/sidebarItems';

    export default {
        name: 'App',
        components: { SidebarItems, Alert, LotrHeader, YggdrasilHeader },
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
