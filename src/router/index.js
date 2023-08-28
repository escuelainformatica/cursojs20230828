import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/homeoption',
      name: 'homeoption',
      component: () => import('../views/HomeOptionView.vue')
    }    ,
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodosView.vue')
    }   ,
    {
      path: '/todosinsertar',
      name: 'todosinsertar',
      component: () => import('../views/TodosInsertar.vue')
    }  
  ]
})

export default router
