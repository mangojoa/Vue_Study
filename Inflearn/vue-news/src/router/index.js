import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import bus from '../utils/bus';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js'

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
            component: NewsView,
            // component: createListView('NewsView'),
            /*
            라우터 네비게이션 가드
            특정 url로 접속하기 전의 동작을 정의하는 속성(함수)
            
            to => 이동할 라우터의 정보
            from => 현재 라우터의 정보
            next => function의 개념 
            */
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
                /*
                이렇게 해당 정보를 찍어보면 알 수 있다.
                console.log('to', to);
                console.log('from', from);
                console.log(next);
                next(); 해당 url 로 이동하는 next() 함수
                */
            },
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            // component: createListView('AskView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            // component: createListView('JobsView'),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
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