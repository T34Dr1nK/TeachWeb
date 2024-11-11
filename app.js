require('dotenv').config();
const express = require('express');
const cors =  require('cors');
const bodyParser = require('body-parser');

app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const route = require('./routers/router.js');

app.use('/',route);


app.use(function (req,res){
    res.status(404).json({ message: "No such a route Exits"});
});

app.use(function (err,req,res,next){
    res.status(err.status || 500).json({ message: "Error What are you doing BRUH"});
});

module.exports = app;