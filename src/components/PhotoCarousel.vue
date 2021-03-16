<!-- Contains a carousel item with images and circles to click on-->
// reverse-transition="fade-transition"
// transition="fade-transition"

<template>
  <v-form v-if="show">
    <v-btn class="close-btn" icon color="grey" @click='()=>{this.$store.commit("hidePhotoCarousel")}'>
      <v-icon>mdi-close-circle</v-icon>
    </v-btn>
    <v-carousel v-model="model" height="80vh" hide-delimiters>
      <!-- For each slide place image -->
      <v-carousel-item 
        v-for="(slide, i) in mapPlaces[mapPlace - 1].slides" :key="i"
      >
        <v-sheet height="80vh" align="center" justify="center" tile>
          <v-img contain :src="slide.img" height="80vh" width="70vw"></v-img>
         <!-- On the image iterate over the buttons needed to add, 
            change their position and add onclick function -->
          <div v-for="(button, j) in slide.buttons" :key="j">
            <circle-btn :top="button.top" :left="button.left" :onclick="() => $emit('button-on-photo', button)"></circle-btn>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-form>
</template>

<script lang="ts">
import CircleBtn from "@/components/CircleBtn.vue"; // @ is an alias to /src

export default{
  components: {
    'circle-btn': CircleBtn
  },
  props: {
      show: {
          type: Boolean,
          default: true
      },
      mapPlace: {
        type: Number,
        default: 1,
      }
  },
  data: () => ({
    model: 0,
    mapPlaces: [
      // 1Intro
      {
        mapId: 1, // Aka in which folder in google drive this image is: https://drive.google.com/drive/folders/124X1Ea0dCkrEldJigJ24VBffBWPV2lpZ
        slides: [
          {
            img:"/TrondheimTour/dreiers minne01.jpg",
            buttons: [
              {
                left: 200,
                top: 200,
                roboText: "Button one clicked",
              },
              {
                left: 400,
                top: 400,
                roboText: "Button two clicked",

              },
            ]
          },
          {
            img:"/TrondheimTour/dreiers minne04.jpg",
            buttons: [
              {
                left: 150,
                top: 500,
                roboText: "Button three clicked",
              },
              {
                left: 200,
                top: 400,
              },
            ]
          },
          {img:"/TrondheimTour/dreiers minne10.jpg", mapId: 1, buttons: []},
        ],
      },
      {
      // 2Helkansætra
        mapId: 2, 
        slides:[
          {img:"/TrondheimTour/dreiers minne08.jpg", mapId: 2, buttons: []},
          {img:"/TrondheimTour/dreiers minne12.jpg", mapId: 2, buttons: []},
          {img:"/TrondheimTour/dreiers minne13.jpg", mapId: 2, buttons: []},
        ]
      },
      {
        // 3Mellom Helkansætra og Geitfjellet
        mapId: 3,
        slides:[
          {img:"/TrondheimTour/dreiers minne14.jpg", mapId: 3, buttons: []},
          {img:"/TrondheimTour/dreiers minne15.jpg", mapId: 3, buttons: []},
          {img:"/TrondheimTour/dreiers minne23.jpg", mapId: 3, buttons: []},
        ]
      },
      {
        // 4Geitfjellet
        mapId: 4,
        slides:[
          {img:"/TrondheimTour/dreiers minne25.jpg", mapId: 4, buttons: []},
          {img:"/TrondheimTour/dreiers minne28.jpg", mapId: 4, buttons: []},
          {img:"/TrondheimTour/dreiers minne32.jpg", mapId: 4, buttons: []},
        ]
      },
      {
        mapId: 5,
        slides:[
          // 5Dreiers Minne
          {img:"/TrondheimTour/dreiers minne35.jpg", mapId: 5, buttons: []},
          {img:"/TrondheimTour/dreiers minne37.jpg", mapId: 5, buttons: []},
          {img:"/TrondheimTour/dreiers minne40.jpg", mapId: 5, buttons: []},
          {img:"/TrondheimTour/dreiers minne43.jpg", mapId: 5, buttons: []},
          {img:"/TrondheimTour/dreiers minne53.jpg", mapId: 5, buttons: []},
          {img:"/TrondheimTour/dreiers minne54.jpg", mapId: 5, buttons: []},
          {img:"/TrondheimTour/dreiers minne60.jpg", mapId: 5, buttons: []},
        ]
      },
      {
        // 6Lavollen // TODO: WHERE IS 6 ON THE MAP ???
        mapId: 6,
        slides:[
          {img:"/TrondheimTour/dreiers minne64.jpg", mapId: 6, buttons: []},
          {img:"/TrondheimTour/dreiers minne65.jpg", mapId: 6, buttons: []},
          {img:"/TrondheimTour/dreiers minne67.jpg", mapId: 6, buttons: []},
        ]
      },
    ],
  }),
};
</script>

<style scoped>
    .close-btn {
        position: absolute;
        left: 96%;
        z-index: 10;
    }
</style>
