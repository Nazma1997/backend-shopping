const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {findUserByProperty, createNewUser} = require('./user');
const error = require('../utils/error');

const registerService = async({name, image, email, password}) => {
  const user = await findUserByProperty('email', email);

  if(user){
    throw error('User already exist', 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return createNewUser({name, image, email, password: hash});
};

const loginService = async({name, password}) => {
  const user = await findUserByProperty('name', name);

  if(!user){
    throw error(`User can't found`, 400);
  }
    const isPasswordMatch =  bcrypt.compare(password, user.password);

  if(!isPasswordMatch){
    throw error(`Password isn't match`, 400)
  }

  const payload = {
    _id: user._id,
    name:user.name,
    image: user.image,
    email: user.email,
    password: user.password
  }

  return jwt.sign(payload, 'secret-key', );
}
// {expiresIn: '2h'}

module.exports = {
  registerService,
  loginService
}