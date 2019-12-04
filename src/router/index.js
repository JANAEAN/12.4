import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',    
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path: 'all',
        name: 'all',
        component: () => import(/* webpackChunkName: "about" */ '../views/all.vue')
      }
      ,
      {
        path: 'cheng',
        name: 'cheng',
        component: () => import(/* webpackChunkName: "about" */ '../views/cheng.vue')
      }
      ,
      {
        path: 'like',
        name: 'like',
        component: () => import(/* webpackChunkName: "about" */ '../views/like.vue')
      }
      ,
      {
        path: 'yun',
        name: 'yun',
        component: () => import(/* webpackChunkName: "about" */ '../views/yun.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
