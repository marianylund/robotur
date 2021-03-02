<template><v-form>
    <div class="circleBtn" @click="hi" ref="circleBtn"></div>
      </v-form>
</template>


<script lang="ts">
//
export default{
    name: 'CircleBtn',
    props: {
        top: {
            type: Number,
            default: 20
        },
        left: {
            type: Number,
            default: 20
        },
        onclick: {
            type: Function,
            default: () => {console.log("Clicked button")},
        }
    },
    data: () => ({
        clicked: false
    }),
    mounted() {
        // Ignore error with style, it actually works:
        this.$refs["circleBtn"].style.top = this.$props.top + "px";
        this.$refs["circleBtn"].style.left = this.$props.left + "px";
    },
        methods: {
        hi() {
            console.log("Clicked");
            if(!this.$data.clicked){
                this.$refs["circleBtn"].style.backgroundColor = "rgba(250, 14, 6, 0.144)";
                this.$data.clicked = true;
                this.$props.onclick();
            }
        },
    },
}
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