const { Router } = require('express')
const todoController = require('./controller/todoController');

const routes = Router()


routes.post('/todo', todoController.store)

module.exports = routes