<!-- Contains a carousel item with images and circles to click on-->
// reverse-transition="fade-transition"
// transition="fade-transition"

<template>
  <v-form v-if="show" >
    <v-btn class="close-btn" icon color="grey" @click='()=>{this.$store.commit("hidePhotoCarousel")}'>
      <v-icon>mdi-close-circle</v-icon>
    </v-btn>
    <v-carousel :value="slideIndex" @change="updateIndex" height="80vh" hide-delimiters ref="carousel">
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
import { mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
  components: {
    'circle-btn': CircleBtn,
  },
  computed: mapGetters(["slideIndex"]),
  props: {
      show: {
          type: Boolean,
          default: true
      },
      mapPlace: {
        type: Number,
        default: 1,
      },
  },
  methods: {
    updateIndex(ind: number){
      this.$store.commit("updateIndex", ind);
      console.log("Index: " + ind + ", current photo: " + this.$data.mapPlaces[this.mapPlace-1].slides[this.slideIndex].img);
    }
  },
  data: () => ({
    mapPlaces: [
      // 1Intro
      {
        mapId: 1, // Aka in which folder in google drive this image is: https://drive.google.com/drive/folders/124X1Ea0dCkrEldJigJ24VBffBWPV2lpZ
        slides: [
          {img:"/TrondheimTour/dreiers minne01.jpg", buttons: [
            {
              left: 0, top: 0,
              showWeather: true, // TODO: show weather
              roboText: "Her er været for i dag. Heldigvis er det aldri for dårlig vær til å ta en digital tur.",
            },
            {
              left: 50, top: 20,
              changeToIndex: 1,
              roboText: "",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne10.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Dette er gran. Det er en av de vanligste tresortene i Norge. Grana kan bli opptil 500 år gammel! Hvis du finner en stubbe i skogen kan du telle årringer på den for å finne alderen på treet",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne04.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Nå nærmer vi oss turens første stopp: Helkansætra! Det er en del av Bymarka naturreservat. Her er skogen vernet, som betyr at det ikke er lov å gjøre noe som kan ødelegge den.",
            },
          ]},
        ],
      },
      {
      // 2Helkansætra
        mapId: 2, 
        slides:[
          {img:"/TrondheimTour/dreiers minne12.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Dette er Helkanseter, en speiderhytte med benker og bålplass utenfor. Det er ikke mulig å bruke hytta uten avtale.",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne08.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Velkommen til Helkanseter!",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne13.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Det er fort gjort å miste ting når man er ute og går tur. Mange henger opp tingene de finner, slik at det skal bli lettere for eieren å finne det igjen.",
            },
          ]},
        ]
      },
      {
        // 3Mellom Helkansætra og Geitfjellet
        mapId: 3,
        slides:[
          {img:"/TrondheimTour/dreiers minne14.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Visste du at det tar mellom 10-20 år før plastposer brytes ned i naturen? Ikke legg igjen søppel i naturen - ta det med deg hjem, og kast det i riktig søppeldunk!",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne15.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Dette er lyng. De fleste plantene i lyngfamilien har vintergrønne blad, slik som denne.",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne23.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Nå nærmer vi oss neste stopp - Geitfjellet! Det er også mange andre spennende plasser i nærområdet. Kanskje vi tar turen til en av de andre plassene en annen gang?",
            },
          ]},
        ]
      },
      {
        // 4Geitfjellet
        mapId: 4,
        slides:[
          {img:"/TrondheimTour/dreiers minne25.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Dette er utsikten fra turens andre stopp! Her ser vi Trondheim by i det fjerne.",
            },
            {
              left: 200, top: 500,
              showNASA: true,
              roboText: "Vil du se noe kult? Trykk her for å få opp dagens bilde fra verdensrommet!",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne28.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Geitfjellet ligger 406 moh (meter over havet). Geitfjellet fikk trolig sitt navn på grunn av at fjellets form kan se ut som en geit, sett fra fjorden.",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne32.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Dette er mose. Mose trives godt i barskogsområder, som i skogen her. Visste du at mose tidligere ble brukt til å tette husvegger, skorsteiner og båter?",
            },
          ]},
        ]
      },
      {
        mapId: 5,
        slides:[
          // 5Dreiers Minne
          {img:"/TrondheimTour/dreiers minne35.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Etter en lang gåtur er det godt med drikkevann tilgjengelig!",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne53.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Rundt i skogen er det satt opp fuglekasser til småfugler. Her har en svartmeis funnet seg et sted å bygge reir. Svartmeis trives godt i barskog, og hvis de finner seg en make, så holder de som regel sammen i flere år. De får vanligvis to kull i året; ett i april-mai, og ett i juli-august.",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne54.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Hvis du, som meg, går tur i vintermånedene, må du passe deg for glatte partier! Her er det bygd et gelender for støtte.",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne60.jpg", buttons: [
            {
              left: 150, top: 500,
              // TODO: pop up robo without a button
              roboText: "Nå er vi nådd til turens høydepunkt - men hvor er det? Se nøye på bildet. Ser du hytta?",
            },
            {
              left: 150, top: 500, // på hytta leder til bilde 37
              roboText: "",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne37.jpg", buttons: [
            {
              left: 150, top: 500,
              // TODO: pop up robo without a button
              roboText: "Her er hytta Dreiers minne! Ser du at hytta er delvis bygd inn i fjellet? Den ble bygget rundt år 1900 - det er over 120 år siden! Bli med inn, da vel!",
            },
            {
              left: 150, top: 500, // Leder til bilde 40 og 43 ??? how though
              roboText: "",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne40.jpg", buttons: []},
          {
              left: 150, top: 500,
              roboText: "Hytta ble brukt som skjulested fra tyskerne under Andre verdenskrig. Den heter Dreiers minne fordi en mann ved navn Henrik Dreier satt hytta i stand før krigen.",
            },
          {img:"/TrondheimTour/dreiers minne43.jpg", buttons: [
            {
              left: 150, top: 500,
              roboText: "Hytta er innredet med ulik pynt som flagg, stearinlys og bamser. Det skal være koselig å besøke hytta. Hvis man besøker den, skal man forlate den i god stand.",
            },
          ]},
        ]
      },
      {
        // 6Lavollen // TODO: WHERE IS 6 ON THE MAP ???
        mapId: 6,
        slides:[
          {img:"/TrondheimTour/dreiers minne64.jpg", buttons: [
            {
              left: 150, top: 500, 
              roboText: "",
            },
          ]},
          {img:"/TrondheimTour/dreiers minne65.jpg", buttons: []},
          {img:"/TrondheimTour/dreiers minne67.jpg", buttons: []},
        ]
      },
    ],
  }),
});
</script>

<style scoped>
    .close-btn {
        position: absolute;
        left: 96%;
        z-index: 10;
    }
</style>
