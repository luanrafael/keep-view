const { Router } = require('express')
const todoController = require('./controller/todoController');

const routes = Router()


routes.post('/todo', todoController.store)
routes.get('/todo', todoController.index)
routes.delete('/todo/:id', todoController.remove)
routes.put('/todo/:id', todoController.update)

module.exports = routes