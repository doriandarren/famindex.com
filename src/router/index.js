import { createRouter, createWebHistory } from 'vue-router'





const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },






  { 
    path: '/:path(.*)', 
    name: "NotFound",
    component: () => import('@/views/sessions/404.vue'), 
  },
];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
