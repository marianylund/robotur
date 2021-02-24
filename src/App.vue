<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
      <NavigationBar />

    <v-main class="mx-4 mb-4" >
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import NavigationBar from "./components/NavigationBar.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavigationBar
  },

  data: () => ({
    //
  })
});
</script>
