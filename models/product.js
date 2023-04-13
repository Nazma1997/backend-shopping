const {Schema, model} = require("mongoose");

const productScheme =new Schema({
  id: String,
  productName: String,
  productQuantity: String,
  productPrice: String,
  productCategory:[{
    ref: 'Category',
    type: Schema.Types.ObjectId
  }],
  productImage: String

});

const Product = model("Product", productScheme)
module.exports = Product;