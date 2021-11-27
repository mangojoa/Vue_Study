import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsList, fetchAskList, fetchJobsList} from '../API/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: []
    },
    /*
    computed 와 동일한 속성을 가졌으나 vuex에 존재한다는 것만 다를 뿐이다.
    */
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations: { 
        /* 
        SET_NEWS(state, news)으로 구성되어 있다. 
        state => state에 접근하기 위한 인자값이다.
        news => actions에서 context.commit('SET_NEWS', res.data)을 의미한다.
        */
        SET_NEWS(state, data) {
            state.news = data;
        },
        SET_ASK(state, data) {
            state.ask = data;
        },
        SET_JOBS(state, data) {
            state.jobs = data;
        }

    },
    actions: {
        /*
            그렇다면 actions에서 불러온 데이터를 어떻게 mutations를 거쳐 state에 담는가?

            우선 actions의 함수 FETCH_NEWS()의 인자값으로 context를 입력한다.
            FETCH_NEWS(context) 이런 형식으로 정의했다면 
            아래에서 .then(res => {
                context.commit('mutations_Name', res.data); 
            }) 이런 형식으로 지정된 mutations에 데이터를 넘길 수 있다. 
        */
        FETCH_NEWS(context) { // NewsView의 제어권이 여기로 넘어오게 된다.
            fetchNewsList()
                .then(res => {
                    context.commit('SET_NEWS', res.data);
                    /*
                    원래대로라면 state.news에 담을 것이다. 
                    하지만 mutations 만이 state에 접근할 수 있다.
                    */
                })
                .catch(e => {
                    console.log(e);
                })
        },
        FETCH_ASK({ commit }) {
            fetchAskList()
                .then(({ data }) => {
                    commit('SET_ASK', data);
                })
                .catch(e => {
                    console.log(e);
                })
        },
        // commit도 이러한 방식으로 사용할 수 있다.
        FETCH_JOBS({ commit }) {
            fetchJobsList()
                /*
                distructuring ({ 인자값 }) => response로 작성하는 구문 대신 
                바로 데이터에 접근하는 방식이다.
                */
                .then(({ data }) => {
                    commit('SET_JOBS', data);
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }
});