const express = require("express");
const path = require('path');
const app = express();
// const cors = require("cors");
const bodyparser = require("body-parser");
const bcrypt =require('bcrypt');
const mongoose =require('mongoose');
// const LoginRoute = require("./route/LoginRoute");

// app.use(cors());
// app.use(express.json());
// app.use(LoginRoute);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(_dirname, 'public')));

const mongo_uri = 'mongodb://dev:dev@localhost/todos';

mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    }else{
        console.log('Successfully connected to ${mongo_uri});
    }
});

app.get('/', (req, res)=>{

});

// app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log('server started');
});

module.exports = app;
