var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
app.get('/',function (req,res) {
/* body... */
res.sendFile('/index.html');
})


app.listen(8000,function(){
	console.log("server listen port 8000")
});