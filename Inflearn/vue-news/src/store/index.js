import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList} from '../API/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: []
    },
    actions: {
        FETCH_NEWS() {
            fetchNewsList()
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }
});