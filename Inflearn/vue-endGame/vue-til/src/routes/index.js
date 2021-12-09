import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  /*
  url의 /#/이 사라진다. /#/의 존재 여부에 따라 새로운 페이지임을 인식한다.
  /#/의 존재한다면 새로운 페이지를 인식하지 못하기에 이를 제거하여 새로운 페이지 임을 인식하게 된다.
  */
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      /* 
      코드 스플리팅의 코드이다. javascript에서 필요에 따라 import 해오는 장점을 가진 코드이다.
      */
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    // 없는 페이지를 접근할 때의 라우터 처리
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
