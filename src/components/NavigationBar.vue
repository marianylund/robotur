// Navigation bar that show on top on all pages
<template>
  <v-container>
    <v-app-bar app dark>
      <router-link id="icon-link" to="/">
        <v-icon class="mr-200">mdi-robot</v-icon>
      </router-link>

      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')"
        >Robotur</v-toolbar-title
      >
    </v-app-bar>
  </v-container>
</template>

<style lang="scss">
#icon-link {
  text-decoration: none;
}
</style>

<script>
export default {
  mounted() {
    console.log(this.$vuetify.breakpoint);
  },
  computed: {
    barVisibility() {
      if (this.$vuetify.breakpoint.name == "xs") {
        return true;
      }
      return false;
    },
  },
};
</script>
