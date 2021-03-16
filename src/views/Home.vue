<template>
  <div>
    <SearchBar />
    <Nasa />
    <TourCards />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar.vue"; // @ is an alias to /src
import TourCards from "@/components/TourCards.vue"; // @ is an alias to /src
import Nasa from "@/components/Nasa.vue";

@Component({
  components: {
    SearchBar,
    TourCards,
    Nasa,
  },
})
export default class Home extends Vue {}
</script>
