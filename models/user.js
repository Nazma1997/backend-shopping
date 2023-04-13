const {Schema, model} = require("mongoose");

const userScheme =new Schema({
  
  name: String,
  email: String,
  password: String,
  image: String

});

const User = model("User", userScheme)
module.exports = User;