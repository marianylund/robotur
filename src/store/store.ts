import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roboText: "default",
    showingRobo: false,
    mapPlace: 1, // there are 5 in total see Map.vue for all the buttons on the map
    showingCarousel: false, // controls if carousel with photos should pop up, which photos are showing depends on mapPlace, see more in PhotoCarousel.vue
    showWeather: false, // controls in weather card should be showing see more in Weather.vue
  },
  getters: {
    roboText: (state) => state.roboText,
    showingRobo: (state) => state.showingRobo,
    mapPlace: (state) => state.mapPlace,
    showingCarousel: (state) => state.showingCarousel,
    showWeather: (state) => state.showWeather,
  },
  mutations: {
    buttonOnPhotoClicked(state, button: any) {
        // Extract needed data from button to update state
        const buttonId = button.id;
        if(buttonId.includes("Map")){
          // This is a button from map, there are 5 in total
          state.mapPlace = buttonId[3];
          state.showingCarousel = true;
        }else{
          state.roboText = button.roboText;
          state.showingRobo = true;
        }
    },
    hidePhotoCarousel(state){
      state.showingCarousel = false;
      state.showingRobo = false;
    },
    hideRobo(state){
        state.showingRobo = false;
    }
  }
});