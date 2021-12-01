import Vue from 'vue';
import Vuex from 'vuex';
// 모듈화를 통해 이제는 사용하지 않는다.
// import {fetchNewsList, fetchAskList, fetchJobsList} from '../API/index.js'
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: {}
    },
    /*
    computed 와 동일한 속성을 가졌으나 vuex에 존재한다는 것만 다를 뿐이다.
    */
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions
});