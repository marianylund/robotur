<template>
  <div class="text-center" v-if="show">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="btnNASA" color="red lighten-2" dark v-bind="attrs" v-on="on">
          NASA
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          {{ title }}
        </v-card-title>

        <v-card-text>
          <v-img
            lazy-src="https://apod.nasa.gov/apod/image/2103/NGC1499_Akar_960.jpg"
            max-height="300"
            max-width="500"
            :src="url"
          ></v-img>
          <br />
          {{ explanation }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Lukk
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const fetchPicture = async () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).catch();
  const json = await response.json();
  return json;
};

export default Vue.extend({
   props: {
     show: {
          type: Boolean,
          default: true
      },
   },
  data: function() {
    return {
      dialog: false,
      url: "",
      explanation: "",
      mediaType: "image",
      title: "",
    };
  },
  created() {
    fetchPicture().then((json) => {
      console.log(json);
      this.url = json["url"];
      this.explanation = json["explanation"];
      this.mediaType = json["media_type"];
      this.title = json["title"];
    });
  },
});
</script>

<style scoped>
.btnNASA {
  position: fixed;
  left: 50px;
  top: 300px;
  z-index: 99; /*  To show the image on top of everyhting */
}
</style>