import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
  },
  getters: {
    isLogin(state) {
      return state.username !== '';
    },
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username;
    },
    CLEAR_USERNAME(state) {
      state.username = '';
    },
  },
  actions: {},
});
