// Page you to when you click explore on the Trondheim Tour card
<template>
  <v-container fluid>
    <Weather
      id="wheatherbox"
      :show="showWeather"
      :lat="63.4305"
      :lon="10.3951"
    />
    <PhotoCarousel
      :show="showingCarousel"
      :mapPlace="mapPlace"
      v-on:button-on-photo="handleEventFormPhoto"
    />
    <Robo :text="roboText" :open="showingRobo" />
    <Map :show="!showingCarousel" v-on:button-on-photo="handleEventFormPhoto" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "@/components/Map.vue"; // @ is an alias to /src
import PhotoCarousel from "@/components/PhotoCarousel.vue"; // @ is an alias to /src
import Robo from "@/components/Robo.vue"; // @ is an alias to /src
import Weather from "@/components/Weather.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Map,
    PhotoCarousel,
    Robo,
    Weather,
  },
  // Get variables from the store, to be able to use them in components
  computed: mapGetters([
    "roboText",
    "showingRobo",
    "showingCarousel",
    "mapPlace",
    "showWeather",
    "slideIndex"
  ]),
})
export default class Home extends Vue {
  handleEventFormPhoto(button: any) {
    // Update state
    this.$store.commit("buttonOnPhotoClicked", button);
  }
}
</script>
<style scoped>
#wheatherbox {
  position: fixed;
  top: 55px;
  right: 0px;
  text-align: left;
  z-index: 0;
}
</style>
