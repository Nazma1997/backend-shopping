
const userService = require('../services/user');
const authService = require('../services/auth');
// const error = require('../utils/error');
const User = require('../models/user')

/* 
 * Get all users
*/

const getAllUsers = async(req, res, next) => {
  try {
    
    const users = await userService.findUsers();
    return res.status(200).json(users);
  } catch (error) {
    next(error)
  }
};


/**
 * Post new user
 */

const postUser = async(req, res, next) => {
  const {name, image, email, password} = req.body;

  try {
    const user = await authService.registerService({name, image, email, password});

    return res.status(201).json(user)
  } catch (error) {
    next(error)
  }
};


const patchUserById = async(req, res, next) => {
  const id = req.params.id;
  const {name, image, email, password} = req.body;

  try{
    const user = await userService.findUserByProperty('_id', id);


    if(!user){
      throw error('User not found', 404);
    }

    user.name = name ?? user.name;
    user.image = image ?? user.image;
    user.email = email ?? user.email;
    user.password = password ?? user.password;

    await user.save();

    return res.status(200).json(user);
  }
  catch(e){
    next(e)
  }

};

const deleteUserById = async(req, res, next) => {
  const id = req.params.id;
  try {
    // const product = await userService.findUserByProperty("_id", id);
    const product = await User.findByIdAndDelete(id)

    if(!product) {
      throw error('User not found', 404);
    }

    // await product.remove();

    return res.status(203).json({message: 'User deleted successfully', product}).send()
  } catch (error) {
    next(error)
  }
};


module.exports = {getAllUsers, postUser, patchUserById, deleteUserById}