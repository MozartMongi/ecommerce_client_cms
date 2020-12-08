import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login.vue'
import Products from '../views/products.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }
  // {
  //   path: '',
  //   name: 'MainPage',
  //   component: MainPage,
  //   children : [
  //     {
  //       path: 'products',
  //       name: 'Products',
  //       component: Products
  //     },
  //     {
  //       path: 'products/:id',
  //       name: 'ProductsEdit',
  //       component: ProductsEdit
  //     },
  //     {
  //       path: 'products/:id',
  //       name: 'ProductsDelete',
  //       component: ProductsDelete
  //     },
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router