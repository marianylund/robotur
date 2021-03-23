import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roboText: "default",
    showingRobo: false,
    mapPlace: 1, // there are 5 in total see Map.vue for all the buttons on the map
    slideIndex: 0, 
    showingCarousel: false, // controls if carousel with photos should pop up, which photos are showing depends on mapPlace, see more in PhotoCarousel.vue
    showWeather: false, // controls in weather card should be showing see more in Weather.vue
    showNASA: false, // controls if Nasa button should be showing see more in Nasa.vue
  },
  getters: {
    roboText: (state) => state.roboText,
    showingRobo: (state) => state.showingRobo,
    mapPlace: (state) => Number(state.mapPlace),
    slideIndex: (state) => Number(state.slideIndex),
    showingCarousel: (state) => state.showingCarousel,
    showWeather: (state) => state.showWeather,
    showNASA: (state) => state.showNASA,
  },
  mutations: {
    buttonOnPhotoClicked(state, button: any) {
        // Extract needed data from button to update state
        if(button.id != undefined){
          const buttonId = button.id;
          if(buttonId.includes("Map")){
            // This is a button from map, there are 6 in total
            state.mapPlace = Number(buttonId[3]);
            state.showingCarousel = true;
            state.slideIndex = 0; // reset index
          }
        }else{
          if(button.roboText != undefined && button.roboText != ""){
            state.roboText = button.roboText;
            state.showingRobo = true;
          }
          if(button.showWeather != undefined && button.showWeather){
            state.showWeather = true;
          }
          if(button.showNASA != undefined && button.showNASA){
            state.showNASA = true;
          }
          if(button.changeToIndex != undefined && button.changeToIndex > -1){
            state.slideIndex = button.changeToIndex;
          }
        }
    },
    hidePhotoCarousel(state){
      state.showingCarousel = false;
      state.showingRobo = false;
    },
    hideRobo(state){
        state.showingRobo = false;
    },
    updateIndex(state, index){
      state.slideIndex = index;
    }, 
    
  }
});