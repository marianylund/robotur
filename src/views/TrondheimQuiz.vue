// Page you go to when you click the quiz button
<template>
  <v-container fluid>
    <v-btn class="accent" v-on="on" @click="$router.push('/trondheimtour')">
      Tilbake
    </v-btn>
    <QuizBox />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import QuizBox from "@/components/QuizBox.vue";

@Component({
  components: {
    QuizBox,
  },
})
export default class Home extends Vue {}
</script>
<style scoped></style>
