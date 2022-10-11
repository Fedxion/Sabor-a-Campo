const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const studentRoute= require('./route/StudentRoute');
const LoginRoute = require('./route/LoginRoute');
// const helloRoute = require('./route/helloRoute');


app.use(cors());
app.use(express.json());
// app.use(studentRoute);
app.use(LoginRoute);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(helloRoute);

module.exports = app;