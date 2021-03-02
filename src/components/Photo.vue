// Show photos of the tour, change it to caroussel: https://vuetifyjs.com/en/components/carousels/#usage

<template>
  <v-form>
    <v-carousel v-model="model" height="80vh">
      <v-carousel-item v-for="(image, i) in images" :key="i">
        <v-sheet height="80vh" align="center" justify="center" tile>
          <v-img contain :src="image" height="80vh" width="70vw"></v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- <div ref="parent"></div>

    <div class="hi" @click="hi" ref="hi"></div> -->
  </v-form>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    images: ["/images/tourimage.png", "/images/tourimage.png"],
    floatingBtn: [
      {
        height: 200,
        width: 200,
        left: 200,
        top: 200,
      },
      {
        height: 200,
        width: 200,
        left: 500,
        top: 200,
      },
    ],
    localBtns: []
  }),
  mounted() {
    this.updateBtn();
  },
  methods: {
    updateBtn() {
      this.localBtns.forEach(btn => btn.parent.removeChild(btn));

      this.floatingBtn.forEach(btnConf => {

        const btn = document.createElement("div");
        btn.style.position = "absolute";
        btn.style.left = btnConf.left + "px";
        btn.style.top = btnConf.top + "px";
        btn.style.width = btnConf.width + "px";
        btn.style.height = btnConf.height + "px";
        btn.style.backgroundColor = "#00ffff";

        this.$refs["parent"].appendChild(btn);

        this.localBtns.push(btn);
      })
    },
    hi() {
      console.log("Hello");

      this.$refs["hi"].style.backgroundColor = "#ffff00";
    },
  },
};
</script>
<style scoped>
.hi {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 200px;
  height: 100px;
  background-color: red;
  border-radius: 2em;
}
</style>