// Show map to the right of the screen with buttons on the road
<template>
  <v-form v-if="show">
    <div class="mapDiv" ref="mapDiv">
      <img class = "mapImage" src="/images/mapimage.png" alt="Map" height="600" ref="mapImage">
      <div v-for="(button, j) in buttons" :key="j">
        <circle-btn :id="button.id" :top="button.top" :left="button.left" :roboText="button.roboText" :onclick="() => $emit('button-on-photo', button)"></circle-btn>
      </div>

    </div>
  </v-form>
</template>

<script lang="ts">
import CircleBtn from "@/components/CircleBtn.vue"; // @ is an alias to /src
import Vue from "vue";

export default Vue.extend({
  components: {
    'circle-btn': CircleBtn
  },
   props: {
      show: {
          type: Boolean,
          default: true
      }
  },
  data: () => ({
        buttons: [
          // 1: Bakklidammen Parkering 
          {
            id: "Map1",
            left: 900,
            top: 690,
            roboText: "1: Bakklidammen Parkering",
          },
          // 2: Helkanseter
          {
            id: "Map2",
            left: 742,
            top: 400,
            roboText: "2: Helkanseter",
          },
          // 3: Mellom Helkansætra og Geitfjellet
          {
            id: "Map3",
            left: 742,
            top: 200,
            roboText: "23: Mellom Helkansætra og Geitfjellet",
          },
          // 4: Geitfjellet
          {
            id: "Map4",
            left: 582,
            top: 20,
            roboText: "4: Geitfjellet",
          },
          // 5: Greiers Minne
          {
            id: "Map5",
            left: 488,
            top: 68,
            roboText: "5: Greiers Minne",
          },
          // 6: Lavollen
          {
            id: "Map6",
            left: 590,
            top: 460,
            roboText: "6: Lavollen",
          },
        ]
      }),
  mounted() {
    (this.$refs.mapImage as HTMLElement).addEventListener('click', this.printXYCoordinates);
  },
  beforeDestroy() {
    (this.$refs.mapImage as HTMLElement).removeEventListener('click', this.printXYCoordinates);
    
  },
  methods: {
    printXYCoordinates(event: any){
      // Brukte for å plassere ut knappene, er ikke helt nøyaktig, men fint å ha et riktig startpunkt
      const clientX = event.clientX;
      const clientY = event.clientY;
      
      console.log("left: ", (clientX - 54), "top: ", (clientY - 72));
    }
  }
});
</script>

<style scoped>
.mapImage {
  border-radius: 10px;
  box-shadow: black;
  padding: px;
  height: 100%;
}

</style>