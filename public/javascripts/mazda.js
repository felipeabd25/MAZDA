var express = require('express');
var router = express.Router();
const sendcontact = require('../libs/send-request');
const dbcore = require('mariadb');
const { sprinf } = require ('sprintf-js');

/* GET home page. */
 router.get('/', function (req, res, next){
     res.render('mazda', { title: 'MAZDA'});
 });

 router.get('/callme', function (req, res, next) {
    res.status(400);
    res.send("Bad Request");
  });
  
  
  router.post('/callme', function (req, res, next) {
    res.status(200);
  }