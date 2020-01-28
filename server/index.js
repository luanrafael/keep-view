const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
var port = 5000

mongoose.connect('mongodb+srv://root:123@cluster0-rseib.mongodb.net/test?retryWrites=true&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

app.use(express.json())
app.use(routes)

app.listen(port, ()=> {console.log(`Server on ${port}`)})