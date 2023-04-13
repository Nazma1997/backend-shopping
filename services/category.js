const Category = require('../models/category');

const findByProperty = (key, value) => {
   if(key == '_id'){
    return Category.findById(value);
   }

   return Category.findOne({[key]: value});
};




const create = ({categoryName, productId}) => {
  const newCreate = new Category({categoryName, productId});
  return newCreate.save()
};


const findAll = () => {
  return Category.find().populate('productId')
};

const update = async(id, data) => {
  const product =await findByProperty('_id', data._id);

  if(product){
    throw error('Category already exist', 400);
  }

  return Category.findByIdAndUpdate(id, {...data}, {new: true})
};




  module.exports = {create, findAll, update,findByProperty }