<template>
  <v-form>
    <div class="circleBtn" @click="hi" ref="circleBtn"></div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
//
export default Vue.extend({
  name: "CircleBtn",
  props: {
    top: {
      type: Number,
      default: 20,
    },
    left: {
      type: Number,
      default: 20,
    },
    onclick: {
      type: Function,
      default: () => {
        console.log("Clicked button");
      },
    },
    roboText: {
      type: String,
      default: "oh hi there it's me your pal Robo",
    },
  },
  data: () => ({
    clicked: false,
  }),
  mounted() {
    // Ignore error with style, it actually works:
    (this.$refs["circleBtn"] as HTMLElement).style.top = this.$props.top + "px";
    (this.$refs["circleBtn"] as HTMLElement).style.left =
      this.$props.left + "px";
  },
  methods: {
    hi() {
      console.log("Clicked");
      if (!this.$data.clicked) {
        (this.$refs["circleBtn"] as HTMLElement).style.backgroundColor =
          "rgba(250, 14, 6, 0.144)";
        this.$data.clicked = true;
      }
      this.$props.onclick(); // One will always be able to click it, even if it has been clicked on
    },
  },
});
</script>

<style scoped>
.circleBtn {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 50px;
  height: 50px;
  background-color: rgba(14, 250, 6, 0.144);
  border-radius: 50px;
  border-style: solid;
  border-width: medium;
  border-color: black;
}
</style>
