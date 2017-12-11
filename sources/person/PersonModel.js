var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  name: {type: String, require: true, minlenght: 2, maxlength: 30},
  lastName: {type: String, require: true, minlenght: 2, maxlength: 30},
  email: {type: String, require: true, minlenght: 10, maxlength: 70},
  phone: {type: String, require: true, minlenght: 10, maxlength: 15},
  age: {type: Number, require: true, min: 13, max: 90},
  weight: {type: Number},
  height: {type: Number},
  registerDate: {type: Date, default: Date.now()}
}, {collection: 'Person'});

module.exports = mongoose.model('Person', PersonSchema);