// Page you go to when you click the plant button
<template>
  <v-container fluid>
    <Plants />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Plants from "@/components/Plants.vue";

@Component({
  components: {
    Plants,
  },
})
export default class Home extends Vue {}
</script>
<style scoped></style>
