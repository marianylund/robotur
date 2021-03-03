// Page you to when you click explore on the Trondheim Tour card
<template>
  <v-container>
      <v-layout>
        <v-row>
          <v-col cols="8">
            <Robo />
            <Photo/>
          </v-col>
          <v-col cols="4">
            <Map/>
          </v-col>
          </v-row >
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "@/components/Map.vue"; // @ is an alias to /src
import Photo from "@/components/Photo.vue"; // @ is an alias to /src
import Robo from "@/components/Robo.vue"; // @ is an alias to /src


@Component({
  components: {
      Map,
      Photo,
      Robo
  }
})
export default class Home extends Vue {}
</script>