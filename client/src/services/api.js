import http from './http'
var endpoint = '/todo'

const getTodos = () => {
    return http().get(endpoint)
}

const postTodos = (data) => { 
    return http().post(endpoint, data)
}

const putTodos = (id, data) => {
    return http().put(`${endpoint}/${id}`, data)
}

const deleteTodos = (id) => {
    return http().delete(`${endpoint}/${id}`)
}

export default {
    getTodos,
    postTodos,
    putTodos,
    deleteTodos
}