import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    favorites: []
  },
  mutations: {
    ADD_TO_FAVORITES(state, contestantId) {
      state.favorites.push(contestantId)
    },
    REMOVE_FROM_FAVORITES(state, contestantId) {
      const index = state.favorites.indexOf(contestantId);
      state.favorites.splice(index, 1);
    }
  },
  actions: {
    addToFavorites({ commit }, contestantId) {
      if (!contestantId) return;

      commit('ADD_TO_FAVORITES', parseInt(contestantId))
    },
    removeFromFavorites({ commit }, contestantId) {
      if (!contestantId) return;

      commit('REMOVE_FROM_FAVORITES', parseInt(contestantId))
    }
  },
  modules: {
  }
})
