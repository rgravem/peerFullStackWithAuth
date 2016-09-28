var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var connection = 'mongodb://locahost:27017/shelf';
console.log('connected to shelf db');

app.use(bodyParser.json());

var port = process.env.PORT || 3030;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('listening on port', port);
});
