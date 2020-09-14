const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
