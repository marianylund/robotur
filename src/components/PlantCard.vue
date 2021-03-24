<template>
  <v-card class="mx-auto primary ma-2" id="plantcard" max-width="400">
    <v-img height="200px" :src="url"> </v-img>
    <v-card-title>
      {{ genericName }}
    </v-card-title>
    <v-card-subtitle> Sist observert: {{ date }} </v-card-subtitle>

    <v-card-actions>
      <v-btn icon @click="show = !show">
        <v-icon color="accent">{{
          show ? "mdi-chevron-up" : "mdi-chevron-down"
        }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <div>Vitenskapelig navn: {{ scientificName }}</div>

          <div>Rike: {{ kingdom }}</div>
          <div>Rekke: {{ phylum }}</div>
          <div>Klasse: {{ plantClass }}</div>
          <div>Order: {{ order }}</div>
          <div>Familie: {{ family }}</div>
          <div>Slekt: {{ genus }}</div>
          <div>Art: {{ species }}</div>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: "",
    },
    rightsHolder: {
      type: String,
      default: "",
    },
    genericName: {
      type: String,
      default: "",
    },
    scientificName: {
      type: String,
      default: "",
    },
    kingdom: {
      type: String,
      default: "",
    },
    phylum: {
      type: String,
      default: "",
    },
    plantClass: {
      type: String,
      default: "",
    },
    order: {
      type: String,
      default: "",
    },
    family: {
      type: String,
      default: "",
    },
    genus: {
      type: String,
      default: "",
    },
    species: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
  },
  data: function() {
    return {
      show: false,
    };
  },
});
</script>

<style scoped>
#plantcard {
  text-align: left;
}
</style>
