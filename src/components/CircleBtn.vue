<template>
  <v-form>
    <div class="circleBtn" @click="hi" ref="circleBtn">
      <p class="noselect" v-if="$props.id == ''">
        {{$props.order + 1}}
      </p>
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
//
export default Vue.extend({
  name: "CircleBtn",
  props: {
    id:{
      type: String,
      default: ""
    },
    order:{
      type:Number,
      default: -1
    },
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
    // roboText: {
    //   type: String,
    //   default: "oh hi there it's me your pal Robo",
    // },
    // showWeather:{
    //   type: Boolean,
    //   default: false // button that will start showing weather on that click
    // },
    // showNASA:{
    //   type: Boolean,
    //   default: false // button that will start showing Nasa on that click
    // },
    // changeToIndex:{
    //   type: Number,
    //   default: -1 // if is more that -1 then changes index slide to this
    // },
  },
  data: () => ({
    clicked: false,
  }),
  mounted() {
    window.addEventListener('resize', this.updatePosition);
    this.updatePosition();
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.updatePosition);
  },
  methods: {
    hi() {
      console.log("Clicked", this.$props.id);//, this.$props.roboText);
      if (!this.$data.clicked) {
        (this.$refs["circleBtn"] as HTMLElement).style.backgroundColor =
          "rgba(250, 14, 6, 0.144)";
        this.$data.clicked = true;
      }
      this.$props.onclick(); // One will always be able to click it, even if it has been clicked on
    },

    updatePosition(){
      if(this.$refs["circleBtn"] as HTMLElement == undefined){
        return;
      }
      let widthOffset = 0;
      let heightOffset = 0;
      if(this.id == "") {
        widthOffset = this.$parent.$el.clientWidth/2;
        heightOffset = this.$parent.$el.clientHeight/2;
      }
        (this.$refs["circleBtn"] as HTMLElement).style.top = heightOffset + this.$props.top + "px";
        (this.$refs["circleBtn"] as HTMLElement).style.left = widthOffset + this.$props.left + "px";
      }
  },
});
</script>

<style scoped>
.circleBtn {
  position: absolute;
  left: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  background-color: rgba(14, 250, 6, 0.6);
  border-radius: 50px;
  border-style: solid;
  border-width: medium;
  border-color: black;
  align-content: center;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  color:black;
}
</style>
