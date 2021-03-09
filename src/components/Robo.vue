// Contains the image of the robot that can be showed on top of images
<template>
    <v-fade-transition>
    <div v-if="open">
        <div class="robo">
            <v-img
                class="robo-image"
                src="/images/robo.png"
            />
        </div>
        <div class="textbox">
            <div class="text">{{text}}</div>
            <v-btn class="close-btn" icon color="grey" @click='open = !open'>
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
        </div>
    </div>
    </v-fade-transition>
</template>

<script lang="ts">
    export default{
        name: 'Robo',
        props: {
            text: {
                // 
                type: String,
                default: "oh hi there it's me your pal Robo"
            },
            open: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style scoped>
    .robo {
        position: absolute;
        left: 16px;
        bottom: 12px;
        z-index: 99; /*  To show the image on top of everyhting */
        pointer-events: none; /* Ignore mouse clicks, so robo doesn't block everything behind them */
        width: 12vw;
    }

    .close-btn {
        position: absolute;
        right: 0;
        top: 0;
    }

    .textbox {
        position: absolute;
        left: 6vw;
        right: 38px;
        bottom: 12px; /* to match carousel */
        min-height: 130px;
        max-height: 25vh;

        border-radius: 0 18px 0 0;
        background-image: linear-gradient(to bottom, rgba(0, 5, 20, 0.65), rgba(0, 5, 20, 0.75)); /*bg blue*/

        display: flex;
        align-items: center;
        padding: 8px 36px 8px 6.5vw; /* Keep text out from behind Robo */
    }

    .text {
        white-space: pre-wrap;
        font-family: monospace;
        font-size: 1.6em;
        color: white; /* palette white */
        text-overflow: clip;
        max-height: 24vh;
        margin: auto 0;
        overflow: auto;
    }
</style>