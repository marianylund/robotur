<template>
  <div class="text-center" v-if="show">
    <v-btn
      class="btnPlanter accent"
      @click="$router.push('/trondheimtour/plants')"
    >
    <v-icon class="ml-0 mr-2">{{'mdi-flower-outline'}}</v-icon>

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
      default: true,
    },
  },
});
</script>

<style scoped>
.btnPlanter {
  position: absolute;
  left: 20px;
  top: 170px;
  z-index: 90; /*  To show the image on top of everyhting */
}
</style>
