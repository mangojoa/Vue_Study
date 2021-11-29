import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView';

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
            component: NewsView
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
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