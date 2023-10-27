const mongoose = require("mongoose");


const contactschema = new mongoose.Schema({
    todo:{
        type:String,
        required:true

    }
   
});

const Todo = mongoose.model('Todo',contactschema);
module.exports = Todo;