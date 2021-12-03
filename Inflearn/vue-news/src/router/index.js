import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js'

Vue.use(VueRouter);

/*
라우터 네비게이션 가드
특정 url로 접속하기 전의 동작을 정의하는 속성(함수)
*/
export const router = new VueRouter({
    mode: 'history', // hash 값 제거
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            // ListItem 분기 처리를 위해서 각 path에 name 속성을 추가 하였다. 
            name: 'news',
            component: NewsView
            // component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView
            // component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
            // component: createListView('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        }
    ]
})