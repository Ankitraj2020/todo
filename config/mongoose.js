const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/to_do');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error while connecting'));

db.once('open',function(){
    console.log('succesfully connected');
});
