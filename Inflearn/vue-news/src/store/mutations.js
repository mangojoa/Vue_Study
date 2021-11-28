export default {
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
        },
        SET_USER(state, data) {
            state.user = data;
        }
}