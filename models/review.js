const { Schema, model } = require("mongoose");

const reviewScheme = new Schema({
  image: {
    type: String,
    required: true
  },
  banglaName: {
    type: String,
    required: true
  },
  englishName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Review = model("Intermediate", reviewScheme)
module.exports = Review;