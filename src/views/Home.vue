<template>
<div>
   <SearchBar />
   <TourCards />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar.vue"; // @ is an alias to /src
import TourCards from "@/components/TourCards.vue"; // @ is an alias to /src

@Component({
  components: {
    SearchBar,
    TourCards,
  }
})
export default class Home extends Vue {}
</script>
