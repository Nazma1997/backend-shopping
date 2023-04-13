const User = require('../models/user');


/* 
 It's not function. It will use for find property
*/
const findUserByProperty =(key, value) => {
  if(key === '_id'){
    return User.findById(value);
  }

  return User.findOne({[key] : value})
}


/*
 Create New User
*/
const createNewUser = ({name, image, email, password}) => {
  const user = new User({name, image, email, password});
  return user.save()
}


/*
 Find All users
*/

const findUsers = () =>{
    return User.find();
}

const updateUser = async(id, data) => {

  const user = await findUserByProperty('email', data.email);

  if(user){
    throw error('Email already in use', 400)
  }
  return User.findByIdAndUpdate(id, {...data}, {new: true});
 }


module.exports = {findUserByProperty, createNewUser, findUsers, updateUser}