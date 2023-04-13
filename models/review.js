const {Schema, model} = require("mongoose");

const reviewScheme =new Schema({
  customerName: String,
  customerImage: String,
  description: String
});

const Review = model("Review", reviewScheme)
module.exports = Review;