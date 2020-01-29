const Todo = require('../model/todo')

async function store(req,res)  {
    const { title, text , style } = req.body
    
    var todo = await Todo.create({
        title,
        text,
        style
    });

    return res.json(todo).status(200)
}

async function index(req, res) {
    const todos = await Todo.find()
    return res.json(todos).status(200)
}

async function remove(req, res) {
    const todo = await Todo.find({_id: req.params.id}).remove()
    res.json(todo).status(200)
}

async function update(req, res) {
    const { title, text , style } = req.body
    var todo = await Todo.findById(req.params.id)

    todo.title = title
    todo.text = text 
    todo.style = style

    todo.save()

    res.json(todo).status(200)
}

module.exports = {
    store,
    index,
    remove,
    update,
}