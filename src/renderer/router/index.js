import Vue from 'vue'
import Router from 'vue-router'
import Login from "../pages/Login.vue"
import Overview from "../pages/Overview.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path:"/login",
      name: "login",
      component: Login
    },
    {
      path: "/overview",
      name: "overview",
      component: Overview
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
