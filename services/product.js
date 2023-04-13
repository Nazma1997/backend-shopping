const Product = require('../models/product');

// const findByProperty = (key, value) => {
//    if(key == '_id'){
//     return Product.findById(value);
//    }

//    return Product.findOne({[key]: value});
// };

const findByProperty = (key, value) => {
  if(key == '_id'){
    return Product.findById(value);
  }

  return Product.findOne({[key] : value});
}



const create = ({id,productName, productQuantity,  productPrice, productCategory, productImage}) => {
  const newCreate = new Product({id,productName, productQuantity, productPrice,  productCategory, productImage});
  return newCreate.save()
};


const findAll = () => {
  return Product.find().populate('productCategory')
};

const update = async(id, data) => {
  const product =await findByProperty('_id', data._id);

  if(product){
    throw error('Product already exist', 400);
  }

  return Product.findByIdAndUpdate(id, {...data}, {new: true})
};



module.exports = {create, findAll, update, findByProperty}