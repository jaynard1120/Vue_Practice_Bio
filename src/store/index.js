import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users :[
      {
        name : "lorem"
      },
      {
        name: "jaynard"
      }
    ],
    posts:[

    ]
  },

  getters :{
    getUsers(state){
      return state.users
    },getPost(state){
      return state.posts
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
