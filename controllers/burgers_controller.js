var express = require("express");
var router = express.Router();
var burgerBuilder = require('../models/burger.js');


router.get('/', function (req, res){
    burgerBuilder.selectAll(function (data){
        var burgerObj = {burgers: data};
        res.render('index', burgerObj)    
    })
});

router.post('/burger/make', function (req,res){
    console.log('the req', req.body);
    burgerBuilder.insertOne(req.body.burger_name, function (result){
        res.render('index');
    })
})

router.post('/burger/eat/:id', function (req,res){
    burgerBuilder.updateOne(req.params.id, function(){
        res.render('index')
    })
})

module.exports = router;