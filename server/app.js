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

app.post('/shelf', function(req, res){
	console.log('in items post');
	console.log('req.body is', req.body);
	var item = req.body;
	var newItem = new Item({
		description: item.description,
		placer: item.placer,
		image: item.image
	});//
	newItem.save(function(err){
		if(err){
			console.log('err saving item', err);
			res.sendStatus(500);
		} else {
			console.log('item saved successfully');
			res.sendStatus(201);
		}
	}); //end newItem save
});//end app post

app.get('/shelf', function(req, res){
	console.log('in item get');
	Item.find({}, function(err, foundItems){
		if(err){
			console.log('error getting item');
			res.sendStatus(500);
		} else{
			console.log('succeeded in getting items');
			res.send(foundItems);
		}
	}); //end Item find
});//end get

app.use(express.static('public'));

var port = process.env.PORT || 3032;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('listening on port', port);
});
