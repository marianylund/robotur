// Contains the image of the robot that can be showed on top of images
<template>
  <div>
      <!-- Comment out button after debugging -->
    <button @click='open = !open'> Toggle Animation </button>
    <v-img
        v-show="open"
        class="robo"
        src="/images/robo.png"
    ></v-img>
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
        width: 200px;
        z-index: 99; /*  To show the image on top of everyhting */
    }
</style>