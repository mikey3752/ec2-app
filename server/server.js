'use strict'

var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv').config();

var app = module.exports = express()
console.log("Allowed hosts", process.env.ALLOWED_HOSTS)
app.use(cors({
    origin: process.env.ALLOWED_HOSTS.split(',')
}))

app.get('/', function(req, res){
  console.log("got a request", req);
  res.json({message:'Hello World from the server'});
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(process.env.PORT);
  console.log('Express started on port ', process.env.PORT);
}