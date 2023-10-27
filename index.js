const express = require('express');
const ejs = require('ejs');
const path = require('path');
const dp  =require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();
const port = 8000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));



app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "static")));



app.get('/',function(req,res){
    
    Todo.find({},function(err,lists){
        if(err){
            return console.log('accoures error while processing');
        }
        //console.log(lists);
        res.render('todo',{
            list:lists
        })
    })
})
app.post('/create-list',function(req,res){
    console.log(req.body);
    Todo .create({
        todo:req.body.todo
    },function(err){
        if(err){
            console.log('error occured');
            return;
        }
        res.redirect('back');

    })
})
app.get('/delete-todo/',function(req,res){
    let id  = req.query.id;

    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error while seleting');
            return;


        }
        res.redirect('back');
    })
})


app.listen(port,function(err){
    if(err){
        console.log('having trounle while running');
        return;
    }
    console.log('running fine!',port);
    return;
});

