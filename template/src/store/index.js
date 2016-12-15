import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const state = {
  count: 0
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
