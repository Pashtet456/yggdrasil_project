<template>
  <v-list class="d-flex pa-0" >
      <v-list-item v-for="item in menu" :key="item.link"
                   :ripple="false"
                   v-on:click="changeCurrentTheme(item.link)"
                   link>
        <router-link
          :to= "item.link">
          {{ item.text }}
        </router-link>
      </v-list-item>
  </v-list>
</template>

<script>
  export default {
      name: 'ListItemsMenu',
      props: {
          menu: {
              type: Array,
              default: () => [],
          },
      },
      methods: {
          changeCurrentTheme( link ) {
              if ( link.match( /lotr/ ) ) {
                  this.$vuetify.theme.themes.dark.dark = '#3a1';
              } else this.$vuetify.theme.themes.dark.dark = '#f2d';
          },
      },
  };
</script>
