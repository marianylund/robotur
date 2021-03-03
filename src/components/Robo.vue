// Contains the image of the robot that can be showed on top of images
<template>
  <div>
      <!-- Comment out button after debugging -->
    <button @click='open = !open'> Toggle Animation </button>
    <div class="robo" v-show="open">
        <v-btn icon color="grey" @click='open = !open'>
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
        data: () => ({
            open: false
        })
    }
</script>

<style scoped>
    .robo {
        position: absolute;
        left: 100px;
        top: 100px;
        z-index: 99; /*  To show the image on top of everyhting */
    }

    .robo-image {
        width: 200px;
    }
</style>