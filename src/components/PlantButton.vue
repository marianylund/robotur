<template>
  <div class="text-center" v-if="show">
    <!-- TODO: for Tomas koble den til med plante nettsiden -->
    <v-btn class="btnPlanter accent">
      Planter
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
   props: {
     show: {
          type: Boolean,
          default: true
      },
   },
});
</script>

<style scoped>
.btnPlanter {
  position: absolute;
  left: 20px;
  top: 150px;
  z-index: 99; /*  To show the image on top of everyhting */
}
</style>