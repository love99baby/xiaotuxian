import { createRouter, createWebHistory } from 'vue-router'  // ✅ 修正拼写
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'

const router = createRouter({  // ✅ 修正拼写
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/category',
          name: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router