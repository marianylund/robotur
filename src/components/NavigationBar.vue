// Navigation bar that show on top on all pages
<template>
  <v-container>
    <v-app-bar app class="primary nav-bar" :absolute="true">
      <router-link id="icon-link" to="/">
        <v-icon id="logo-icon" class="mr-200">mdi-robot</v-icon>
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
#logo-icon {
  padding-right: 0.3rem;
}
.nav-bar{
  z-index: 99; /*  To show the image on top of everyhting */
}
</style>
