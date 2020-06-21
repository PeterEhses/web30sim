/* eslint-disable no-useless-escape */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*/:id', // regex match only last "directory" // [^\/]+(?=\/$|$)
    name: 'Seeded',
    component: Home
  },
  {
    path: '*/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
