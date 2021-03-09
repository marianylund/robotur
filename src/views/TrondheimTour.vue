// Page you to when you click explore on the Trondheim Tour card
<template>
  <v-container fluid>
    <Weather id="wheatherbox" :lat="63.4305" :lon="10.3951" />
    <v-layout>
      <v-row>
        <v-col cols="8" style="position: relative">
          <Photo v-on:robo-text="handleEventFormPhoto"/>
          <Robo :text="roboText" :open="showingRobo"/>
        </v-col>
        <v-col cols="4">
          <Map />
        </v-col>
      </v-row>
    </v-layout>
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
  computed: mapGetters(["roboText", "showingRobo"]),
})
export default class Home extends Vue {
  text!:string;

  handleEventFormPhoto(button: any) {
    this.$store.commit("updateRobo", button.top);
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
