import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import PrincipalView from '../views/PrincipalView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrincipalView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: PrincipalView,
    // },
    {
      path: '/filtrouno',
      name: 'filtrouno',
      component: () => import('../components/Filtro1.vue')
    },
    {
      path: '/filtrodos',
      name: 'filtrodos',
      component: () => import('../components/Filtro2.vue')
    },
  ]
})

export default router;
