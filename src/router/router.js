import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import ProductView from './views/ProductView.vue'

const routes = [

  {
    path: '/products',
    name: 'Products',
    component: ProductView
  },

  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('./views/Product.vue')
  },

  {
    path: '/product/:id',
    component: () => import('@/views/ProductDetail.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { requiresAuth: false },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true },
  },
  // ... route lainnya
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.token) {
    next('/login')
  } else if (to.path === '/login' && userStore.token) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
