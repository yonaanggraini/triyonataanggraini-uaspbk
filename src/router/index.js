import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CartView.vue'

import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'
import ProductPage from '../views/ProductPage.vue'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/produc/:idt',
    name: 'product',
    component: ProductPage,
  },

  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
  },

  {
    path: '/products/:id',
    name: 'product-detail',
    component: ProductDetailView,
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView,
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
