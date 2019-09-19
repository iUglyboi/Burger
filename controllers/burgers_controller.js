var express = require("express");
var app = express();
var burger = require('../models/burger.js');

app.get('/', function (req, res){
    res.send('/index')
});

app.get('/index', function (req, res){
    burger.selectAll(function (data){
        var burgerObj = {burgers: data};
        res.send('index', burgerObj)    
    })
});

app.post('/burger/make', function (req,res){
    burger.insertOne(req.body.burger_name, function (){
        res.send('/index');
    })
})

app.post('/burger/eat/:id', function (req,res){
    burger.updateOne(req.params.id, function(){
        res.send('/index')
    })
})

module.exports = app;