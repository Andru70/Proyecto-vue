import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
// import Filtro1 from '../components/Filtro1.vue'
// import Filtro2 from '../components/Filtro2.vue'
import PrincipalView from '../views/PrincipalView.vue'
// import FooterTemp from '../components/FooterTemp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PrincipalView,
      children: [
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
    },
    
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/FooterTemp.vue')
    },
    
  ]
})

export default router
