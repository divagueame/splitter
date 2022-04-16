import { createStore } from 'vuex'

export default createStore({
  state: {
    chiki: 11
  },
  getters: {
  },
  mutations: {
    add (state) {
      state.chiki++
    }
  },
  actions: {
  },
  modules: {
  }
})
