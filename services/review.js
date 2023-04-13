const Review = require('../models/review');

const findByProperty = (key, value) => {
   if(key == '_id'){
    return Review.findById(value);
   }

   return Review.findOne({[key]: value});
};

const create = ({customerName, customerImage, description}) => {
  const newCreate = new Review({customerName, customerImage, description});
  return newCreate.save()
};


const findAll = () => {
  return Review.find()
};

const update = async(id, data) => {
  const product =await findByProperty('_id', data._id);

  if(product){
    throw error('Review already exist', 400);
  }

  return Review.findByIdAndUpdate(id, {...data}, {new: true})
};



module.exports = {create, findAll, update}