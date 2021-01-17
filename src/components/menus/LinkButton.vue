<template>
  <v-btn v-on:click="chengeTheme(link)">
    <router-link
      :to="link">
      {{text}}
    </router-link>
  </v-btn>
</template>

<script>
  export default {
      name: 'LinkButton',
      props: {
          link: {
              type: String,
          },
          text: {
              type: String,
          },
      },
      methods: {
          chengeTheme(link) {
              if (link.match(/state.app.currentProject/))
              if ()
          },
      },
  };
</script>
