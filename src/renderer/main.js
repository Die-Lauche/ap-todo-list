import Vue from 'vue'
import axios from 'axios'
import mysql from 'mysql'

import App from './App'
import router from './router'
import store from './store'

const todos = [
  { id: 1, titel: '', description: '', done: false },
  { id: 2, titel: '', description: '', done: false },
  { id: 3, titel: '', description: '', done: false },
  { id: 4, titel: '', description: '', done: false },
  { id: 5, titel: '', description: '', done: false },
]

const database = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'todo'
})
window.database = database
database.connect()
database.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results, fields);
})


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

// database.end()
