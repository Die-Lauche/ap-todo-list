import Vue from 'vue'
import axios from 'axios'
import mysql from 'mysql'

import App from './App'
import router from './router'
import store from './store'

import { Server, Response } from "miragejs"

new Server({
  routes() {
    this.namespace = "https://myserver.com/api"

    this.post("/login", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      if(attrs.username === 'test' && attrs.password === 'test') {
        return attrs
      }

      let headers = {}
      let data = { errors: ["Username or password wrong!"] }

      return new Response(403, headers, data)
    })

  },
})

if (!process.env.IS_WEB) {
  Vue.use(require('vue-electron'))
}
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')