var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	description: {type: String, required: true},
  placer: {type: String, required: true},
  image: {type: String, default: '../images/books.jpg'}
});

var itemModel=mongoose.model('items', itemSchema);

module.exports=itemModel;
