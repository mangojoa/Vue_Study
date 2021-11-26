import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/Kakao/KakaoLogin.vue'
// import DataBinding from '../views/Mixin/Mixin.vue'
// import DataBinding from '../views/props/ParentComponent4.vue'
// 새롭게 라우팅을 추가하기 전에 꼭 import를 시행해라 ... 에러난다 ...

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
    // 새롭게 추가된 컴포넌트의 라우팅을 설정
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
