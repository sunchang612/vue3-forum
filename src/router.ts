import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import ColounDetail from './views/ColumnDetail.vue'
import store from './store'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { redirectAlreadyLogin: true }
    },
    {
      path: '/details/:id',
      name: 'details',
      component: ColounDetail,
      meta: { requeredLogin: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { user } = store.state
  if (to.meta.requeredLogin && !user.isLogin) {
    next({
      name: 'login'
    })
  } else if (to.meta.redirectAlreadyLogin && user.isLogin) { // 如果已经登录，重定向到首页
    next('/')
  } else {
    next()
  }
})

export default router
