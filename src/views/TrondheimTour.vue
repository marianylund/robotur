// Page you to when you click explore on the Trondheim Tour card
<template>
  <v-container fluid>
    <Weather id="wheatherbox" :lat="63.4305" :lon="10.3951" />
          <!-- 
            En pop up når man har trykket på map button
            <Photo v-on:button-on-photo="handleEventFormPhoto"/>
          <Robo :text="roboText" :open="showingRobo"/> -->
    <Map />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "@/components/Map.vue"; // @ is an alias to /src
import Photo from "@/components/Photo.vue"; // @ is an alias to /src
import Robo from "@/components/Robo.vue"; // @ is an alias to /src
import Weather from "@/components/Weather.vue";
import { mapGetters } from "vuex";

@Component({
  components: {
    Map,
    Photo,
    Robo,
    Weather,
  },
  // Get variables from the store, to be able to use them in components
  computed: mapGetters(["roboText", "showingRobo"]), 
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
  position: absolute;
  top: 0px;
  right: 0px;
  text-align: left;
  z-index: 10;
}
</style>
