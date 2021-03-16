// Page you to when you click explore on the Trondheim Tour card
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
