const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    title: String,
    text: String,
    style: {
          bg: String,
          darken: {
              type: Boolean,
              default: true,
          },
          selected: {
              type: Boolean,
              default: true
          },
    }
})

module.exports = mongoose.model('Todo', todoSchema);