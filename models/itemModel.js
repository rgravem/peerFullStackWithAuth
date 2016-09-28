var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	description: String,
	placer: String,
	image: String

});

var itemModel=mongoose.model('items', itemSchema);

module.exports=itemModel;
