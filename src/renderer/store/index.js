import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

// TODO: load initial data here

var mysql = require('mysql');

const database = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'todo'
});

database.connect(function(err) {
  if(err) throw err;
  console.log('Connected!')
});

database.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [
      { id: 1, titel: '', description: '', done: false },
      { id: 2, titel: '', description: '', done: false },
      { id: 3, titel: '', description: '', done: false },
      { id: 4, titel: '', description: '', done: false },
      { id: 5, titel: '', description: '', done: false },
    ]
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    done (state, id) { state.todos.filter(o => o.id === id)[0].done = true },
    undone (state, id) { state.todos.filter(o => o.id === id)[0].done = false }
  },
  actions: {
    setDone (context, id) {
      context.commit('done', id) // change locally (mutate)
      // TODO: Update in DB
    },
    setUndone (context, id) {
      context.commit('undone', id) // change locally (mutate)
      // TODO: Update in DB
    }
  }
})
