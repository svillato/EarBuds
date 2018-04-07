const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String},
  description: { type: String},
  imageURL: { type: String},
  podCastURL: { type: String},
  transcription: { type: String},
  episodes: { type: [String]},
});

const Item = mongoose.model('Item', itemSchema);
 
module.export = Item;
