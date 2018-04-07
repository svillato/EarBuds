const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  imageURL: { type: String, required: true },
  episodes: { type: {}, required: true },
});

const Item = mongoose.model('Item', itemSchema);
 
module.export = Item;
