<template>
  <v-card class="weather" elevation="2" outlined shaped max-width="100" v-if="show">
    <v-card-title id="temp">{{ airTemp }}°C </v-card-title>
    <v-img contain :src="img" height="75px" width="75px"></v-img>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

const getCurrentWeather = async (lat: number, lon: number) => {
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
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
    lat: {
      type: Number,
      default: 1,
    },
    lon: {
      type: Number,
      default: 1,
    },
  },
  data: function() {
    return {
      airTemp: 0,
      symbolCode: "sunny",
      img: "/weathericons/clearsky_day.png",
    };
  },
  created() {
    getCurrentWeather(this.lat, this.lon).then((json) => {
      this.airTemp =
        json["properties"]["timeseries"][0]["data"]["instant"]["details"][
          "air_temperature"
        ];
      this.symbolCode =
        json["properties"]["timeseries"][0]["data"]["next_1_hours"]["summary"][
          "symbol_code"
        ];
      this.img = `/weathericons/${this.symbolCode}.png`;
    });
  },
});
</script>

<style scoped>
.weather {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 99; /*  To show the image on top of everyhting */
  pointer-events: none; /* Ignore mouse clicks, so it doesn't block everything behind them */
  width: 12vw;
  text-align: left;
}

</style>
