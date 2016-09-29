var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongoURI = 'mongodb://localhost:27017/shelf';
var MongoDB = mongoose.connect(mongoURI).connection;

// mongo db connection error handeling
MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});


var Items = require('../models/itemModel');

app.use(bodyParser.json());

app.get('/', function(req, res){
	var indexFile=path.join(__dirname, '../public/views/index.html');
	res.sendFile(indexFile);
});

app.post('/addToShelf', function(req, res){
	console.log('in items post');
	console.log('req.body is', req.body);
	var item = req.body;
	var newItem = new Items({
		description: item.description,
		placer: item.placer,
		image: item.image
	});
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
	Items.find({},function(err, foundItems){
		if(err){
			console.log('error getting item');
			res.sendStatus(500);
		} else{
			console.log('succeeded in getting items');
			console.log("these were found:", foundItems);
			res.send(foundItems);
		}
	}); //end Item find
});//end get

app.use(express.static('public'));

var port = process.env.PORT || 3030;

var server = app.listen(port, function(){
	var port = server.address().port;
	console.log('listening on port', port);
});
