const Todo = require('../model/todo')

async function store(req,res)  {
    const { title, text , style } = req.body
    
    var todo = await Todo.create({
        title,
        text,
        style
    });

    return res.json(todo);
}

module.exports = {
    store,
}