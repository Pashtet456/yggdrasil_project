<template>
  <v-list class="d-flex pa-0" >
      <v-list-item v-for="item in menu" :key="item.link"
                   :ripple="false"
                   link>
        <router-link :to= "item.link" >
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
  };
</script>
