import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView';
import createListView from '../views/CreateListView.js'

Vue.use(VueRouter);

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
            // component: NewsView // 를 대신하여 createListView를 사용하겠다.
            component: createListView('NewsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
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