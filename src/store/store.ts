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
    roboText: (state) => {return state.roboText.toString()},
    showingRobo: (state) => state.showingRobo,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    updateRobo(state, text: string) {
        state.roboText = text;
        state.showingRobo = true;
    },
    hideRobo(state){
        state.showingRobo = false;
    }
  }
});