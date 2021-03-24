<template>
  <div class="text-center" v-if="show">
    <v-btn
      class="btnQuiz accent"
      @click="$router.push('/trondheimtour/plants')"
    >
    <v-icon class="ml-0 mr-2">{{'mdi-medal-outline'}}</v-icon>
      Quiz
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
.btnQuiz {
  position: absolute;
  left: 20px;
  top: 262px;
  z-index: 90; /*  To show the image on top of everyhting */
}
</style>
