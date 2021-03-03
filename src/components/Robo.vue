// Contains the image of the robot that can be showed on top of images
<template>
  <div>
      <!-- Comment out button after debugging -->
    <button @click='open = !open'> Toggle Animation </button>
    <div class="robo" v-show="open">
        <v-btn class="close-btn" icon color="grey" @click='open = !open'>
            <v-icon>mdi-close-box</v-icon>
        </v-btn>
        <v-img
            class="robo-image"
            src="/images/robo.png"
        ></v-img>
    </div>
  </div>
</template>

<script lang="ts">
    export default{
        name: 'Robo',
        props: {
            top: {
                type: Number,
                default: 400
            },
            left: {
                type: Number,
                default: 100
            },
            text: {
                // 
                type: String,
                default: "Hei!",
            }
        },
        data: () => ({
            open: false
        }),
        mounted() {
            // Ignore error with style, it actually works:
            this.$refs["circleBtn"].style.top = this.$props.top + "px";
            this.$refs["circleBtn"].style.left = this.$props.left + "px";
        },
    }
</script>

<style scoped>
    .robo {
        position: absolute;
        left: 100px;
        top: 400px;
        z-index: 99; /*  To show the image on top of everyhting */
    }

    .robo-image {
        width: 200px;
    }

    .close-btn {
        align-content: left;
        left: 160px;
        top: 20px;
    }
</style>