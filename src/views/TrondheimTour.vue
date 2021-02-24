<template>
  <v-container>
      <Map/>

  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "@/components/Map.vue"; // @ is an alias to /src
import TourCards from "@/components/TourCards.vue"; // @ is an alias to /src

@Component({
  components: {
      Map
  }
})
export default class Home extends Vue {}
</script>