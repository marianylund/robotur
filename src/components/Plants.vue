<template>
  <div class="text-center">
    <v-img
      v-for="(url, index) in imgs"
      :key="index"
      :src="url"
      max-height="150"
      max-width="250"
    ></v-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
            this.imgs.push(i["identifier"]);
          }
        } else {
          this.imgs.push(img["identifier"]);
        }
      }
    });
  },
});
</script>
