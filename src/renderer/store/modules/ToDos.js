const state = {
    lists: [
        { id: 1, title: 'List 1' },
        { id: 2, title: 'List 2' },
    ],
    todos: [
        { id: 1, todo_list_id: 1, content: 'ToDo 1', completed: false },
        { id: 2, todo_list_id: 1, content: 'ToDo 2', completed: false },
        { id: 3, todo_list_id: 1, content: 'ToDo 3', completed: false },
        { id: 4, todo_list_id: 2, content: 'ToDo 4', completed: false },
        { id: 5, todo_list_id: 2, content: 'ToDo 5', completed: false },
    ],
}

const getters = {
    lists: state => state.lists,
    todos: state => state.todos,
    todosForList: state => id => state.todos.filter(item => item.todo_list_id === id),
}

const mutations = {
    done(state, id) { state.todos.filter(item => item.id === id)[0].done = true },
    undone(state, id) { state.todos.filter(item => item.id === id)[0].done = false }
}

const actions = {
    // TODO Add the update/delete/create actions/mutations
    setDone(context, id) {
        // TODO: Update in DB
        context.commit('done', id) // change locally (mutate)
    },
    setUndone(context, id) {
        // TODO: Update in DB
        context.commit('undone', id) // change locally (mutate)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
