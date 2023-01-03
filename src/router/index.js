import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'
import ProductView from '../views/Product.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SuccessView from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView
  }
]

const router = new VueRouter({
  routes
})

export default router
