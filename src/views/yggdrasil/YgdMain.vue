<template>
  <div>
    <v-card color="dark"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, laborum!</v-card>
    <v-card color="primary"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, laborum!</v-card>
    <v-card color="secondary"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, laborum!</v-card>
    <v-card color="accent"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, laborum!</v-card>
    <v-card color="error"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, laborum!</v-card>
  </div>
</template>

<script>
  export default {
      name: 'YgdMain',
      mounted() {
          if ( this ) {
              console.log( this.$router.options.base );
          }
          console.log( this.$router.app.$store.state.app.currentProject );
      },
  };
</script>
