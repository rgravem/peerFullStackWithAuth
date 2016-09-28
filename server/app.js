var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var connection = 'mongodb://locahost:27017/shelf';
console.log('connected to shelf db');


var models = require('../models/itemModel');

app.use(bodyParser.json());

app.get('/', function(req, res){
	var indexFile=path.join(__dirname, '../public/views/index.html');
	res.sendFile(indexFile);
});

app.use(express.static('public'));

var port = process.env.PORT || 3030;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('listening on port', port);
});
