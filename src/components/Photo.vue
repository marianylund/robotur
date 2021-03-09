<!-- Contains a carousel item with images and circles to click on-->

<template>
  <v-form>
    <v-carousel v-model="model" height="80vh" hide-delimiters>
      <!-- For each slide place image -->
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
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
  data: () => ({
    model: 0,
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
        img:"/TrondheimTour/dreiers minne02.jpg",
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
      {img:"/TrondheimTour/dreiers minne03.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne04.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne05.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne06.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne07.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne08.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne09.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne10.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne11.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne12.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne13.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne14.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne15.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne16.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne17.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne18.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne19.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne20.jpg", buttons: []},
      {img:"/TrondheimTour/dreiers minne21.jpg", buttons: []},
    ],
  }),
};
</script>
