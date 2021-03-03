<template>
  <div>Temperatur: {{ airTemp }}°C</div>
</template>

<script lang="ts">
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

export default {
  name: "Weather",
  props: ["lat", "lon"],
  data: function() {
    return {
      airTemp: 0,
    };
  },
  created() {
    getCurrentWeather(this.lat, this.lon).then((json) => {
      this.airTemp =
        json["properties"]["timeseries"][0]["data"]["instant"]["details"][
          "air_temperature"
        ];
    });
  },
};
</script>
