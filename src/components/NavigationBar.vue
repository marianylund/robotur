// Navigation bar that show on top on all pages
<template>
  <v-container>
    <v-app-bar app dark>

        <v-icon class = "mr-200">mdi-robot</v-icon>

        <v-toolbar-title>Robotur</v-toolbar-title>
    </v-app-bar>

  </v-container>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$vuetify.breakpoint)
    },
    computed: {
      barVisibility () {
          if(this.$vuetify.breakpoint.name == 'xs'){
              return true;
          }
          return false;
      },
    },
  }
</script>