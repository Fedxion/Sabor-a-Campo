const express = require('express');

const mongoose = require('mongoose');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const studentRoute= require('./route/StudentRoute');
const LoginRoute = require('./route/LoginRoute');
// const helloRoute = require('./route/helloRoute');

const AuthRoute = require('./route/auth')

app.use('/api', AuthRoute);
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(LoginRoute);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(helloRoute);

module.exports = app;