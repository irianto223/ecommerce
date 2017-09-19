import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var state = {
  items: []
}

var mutations = {
  setItems (state, payload) {
    state.items = payload
  }
}

var actions = {
  getAllItems ({commit}) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/items'
    })
    .then(response => {
      commit('setItems', response.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

var store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
