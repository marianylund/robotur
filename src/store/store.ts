import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0, // example, can be deleted
    roboText: "default",
    showingRobo: false,
  },
  getters: {
    roboText: (state) => state.roboText,
    showingRobo: (state) => state.showingRobo,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    buttonOnPhotoClicked(state, button: any) {
        // Extract needed data from button to update state
        state.roboText = button.roboText;
        state.showingRobo = true;
    },
    hideRobo(state){
        state.showingRobo = false;
    }
  }
});