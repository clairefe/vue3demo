/*
 * @Date: 2020-11-02 16:22:08
 * @LastEditors: hu.wenjun
 * @LastEditTime: 2020-11-06 11:43:30
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
