const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  key:{ type: String, required: true },
  name: { type: String, required: true },
  address: { type: String },
  url: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  phone: { type: String, required: true },
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
