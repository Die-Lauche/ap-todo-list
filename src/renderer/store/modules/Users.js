import fetch from 'node-fetch'

const state = {
    user: null,
    error: null
}

const getters = {
    user: state => state.user,
    authenticated: state => state.user !== null // False if user is not logged in
}

const mutations = {
    setUser(state, user) { state.user = user },
    setError(state, error) { state.error = error }
}

const actions = {
    // Do login
    login(context, username, password) {
        fetch("https://myserver.com/api/login", {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(response => response.json())
            .then(user => {
                context.commit('setUser', user)
                context.commit('setError', null)
            })
            .catch(error => context.commit('setError', error))
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
