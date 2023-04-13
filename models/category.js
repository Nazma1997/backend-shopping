const {Schema, model} = require("mongoose");

const categoryScheme =new Schema({
  
  categoryName: String,
  productId:[{
    ref: 'Product',
    type: Schema.Types.ObjectId
  }],
  

});

const Category = model("Category", categoryScheme)
module.exports = Category;