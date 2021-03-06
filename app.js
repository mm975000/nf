var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path=require("path");
var cons=require("consolidate");
var swig=require("swig");

var app = express();

// view engine setup

app.engine("html",cons.swig);
app.set("view engine","html");
app.set("views",__dirname+"/views");
// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use("http://mm2mm.azurewebsites.net/favicon.ico",express.static(path.join(__dirname,"/public/favicon.ico")));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/",function(req,res){
  res.render("index",{"title":"nf1"});
});
