import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state: {
    user: []
  },
  mutations: {
    user(state, data) {
      state.user = data;
    }
  },
  plugins: [
    persistedstate({
      paths: ['user']
    })
  ]
});

export default store;