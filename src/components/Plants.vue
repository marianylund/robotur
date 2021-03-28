<template>
  <div class="text-center">
    <h1>Observerte planter i området</h1>
    <v-row>
      <v-col align="start">
        <v-btn class="accent" v-on="on" @click="$router.push('/trondheimtour')">
          Tilbake
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(plant, index) in imgs" :key="index">
        <PlantCard v-bind="plant" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PlantCard from "./PlantCard.vue";

const fetchPlants = async () => {
  const url =
    "https://api.gbif.org/v1/occurrence/search?has_coordinate=true&has_geospatial_issue=false&media_type=StillImage&geometry=POLYGON((10.24391%2063.39104,10.29626%2063.39104,10.29626%2063.41637,10.24391%2063.41637,10.24391%2063.39104))&kingdomKey=6";
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).catch();
  const json = await response.json();
  return json;
};

export default Vue.extend({
  components: {
    PlantCard,
  },
  data: function() {
    return {
      imgs: [] as any,
    };
  },
  created() {
    fetchPlants().then((json) => {
      const results = json["results"];
      for (const result of results) {
        const img = result["media"];
        if (Array.isArray(img)) {
          for (const i of img) {
            const plant = {
              url: i["identifier"],
              rightsHolder: i["rightsHolder"],
              genericName: result["genericName"],
              scientificName: result["scientificName"],
              kingdom: result["kingdom"],
              phylum: result["phylum"],
              plantClass: result["class"],
              order: result["order"],
              family: result["family"],
              genus: result["genus"],
              species: result["species"],
              date:
                result["day"].toString() +
                "/" +
                result["month"].toString() +
                "/" +
                result["year"].toString(),
            };
            this.imgs.push(plant);
          }
        } else {
          const plant = {
            url: img["identifier"],
            rightsHolder: img["rightsHolder"],
            genericName: result["genericName"],
            scientificName: result["scientificName"],
            kingdom: result["kingdom"],
            phylum: result["phylum"],
            order: result["order"],
            family: result["family"],
            genus: result["genus"],
            species: result["species"],
            date:
              result["day"].toString() +
              "/" +
              result["month"].toString() +
              "/" +
              result["year"].toString(),
          };
          this.imgs.push(plant);
        }
      }
    });
  },
});
</script>
