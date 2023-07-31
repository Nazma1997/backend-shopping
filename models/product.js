const { Schema, model } = require("mongoose");

const productScheme = new Schema({

  name: {
    type: String,
    required: true
  },
  writersName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }

});

const Product = model("Advance", productScheme)
module.exports = Product;