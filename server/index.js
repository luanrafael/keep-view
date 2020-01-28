const express = require('express')


const app = express()
var port = 5000


app.listen(port, ()=> {console.log(`Server on ${port}`)});