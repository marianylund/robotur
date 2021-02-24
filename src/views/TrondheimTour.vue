<template>
  <v-container>
      <v-layout row>
        <v-flex cols="12">
            <Photo/>
          </v-flex >
          <v-flex cols="6">
            <Map/>
          </v-flex >
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Map from "@/components/Map.vue"; // @ is an alias to /src
import Photo from "@/components/Photo.vue"; // @ is an alias to /src

@Component({
  components: {
      Map,
      Photo
  }
})
export default class Home extends Vue {}
</script>