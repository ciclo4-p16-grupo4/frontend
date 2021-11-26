import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Admin from '../views/Admin.vue'
import User from '../views/User.vue'
import Signup from '../components/users/Signup.vue'
import Login from '../components/users/Login.vue'
import Error404Page from '../components/home/404Page.vue'
import store from '../store/index.js'

const routes = [
  /** Componente principal */
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  /** Detalles de un inmueble */
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  },
  /** User /login & signup */

  {
    path: '/user',
    name: 'User',
    component: User,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'signup',
        component: Signup
      }
    ]
  },

  /** Admin */
  {
    path: '/admin',
    alias: '/Admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true }
  },

  /** 404 Not found */
  {
    path: '/:pathMatch(.*)*',
    name: '404Page',
    component: Error404Page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const staff = store.state.loguedUser.is_staff
      
    if(staff == 'true' || staff == true){
      return next(true)
    }else {
      // console.log(staff);
      window.alert('Usuario no registrado como administrador')
      return next({path: '/user/login'})
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
