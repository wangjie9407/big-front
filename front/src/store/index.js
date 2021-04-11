import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathList:[]
  },
  mutations: {
    SET_PATHLIST(state,p){
      state.pathList = p;
    }
  },
  getters: {
    pathList: state => {
      return state.pathList;
    }
  },
  actions: {
  },
  modules: {
  }
})
