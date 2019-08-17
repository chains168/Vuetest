import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/**
 * mutations 里面放置的是我们操作state对象属性的方法
 */


export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    
    mutationsAddCount(state, n = 0) {
      localStorage.setItem('count',state.count);
      return (state.count += n)
  },
  mutationsReduceCount(state, n = 0) {
      localStorage.setItem('count',state.count);
      return (state.count -= n)
  }
  },
  actions: {
    actionsAddCount(store, n = 0) {
      return store.commit('mutationsAddCount', n)
  },
  actionsReduceCount({ commit }, n = 0) {
      return commit('mutationsReduceCount', n)
  }
  }
});
