const service = require('../services/review');
const Review = require('../models/review')

const getAll = async(req, res, next) => {
  try {
    const product = (await service.findAll()).reverse();
    return res.status(200).json({message: 'Get all review', product})
  } catch (error) {
    next(error)
  }
};

const createProduct = async(req, res, next) => {
  const {banglaName, englishName, image, category} = req.body;

  try {

    const product = await service.create({banglaName, englishName, image, category});
    await product.save();
  
    return res.status(201).json({message: 'Review created successfully', product})

  } catch (error) {
    next(error)
  }
};


const update = async(req, res, next) => {
  const id = req.params.productId;
  const {banglaName, englishName, image, category} = req.body;

  try {
    // const product = await service.findByProperty('_id', id);
    const product = await Review.findByIdAndUpdate(id);
    if(!product){
      throw error('Product not found', 400);
    }

    product.banglaName = banglaName ?? product.banglaName;
    product.englishName = englishName ?? product.englishName;
    product.image = image ?? product.image;
    product.category = category ?? product.category
   

    await product.save();

    return res.status(200).json({message: 'Review updated successfully', product})
  } catch (error) {
     next(error)
  }
};

 
const deleteProduct = async(req, res, next) => {
  const productId = req.params.productId;

  try {
    const product = await Review .findByIdAndRemove(productId);
    if(!product){
      throw error('Review not found', 400);
    }

    return res.status(203).json({message: 'Review deleted successfully', product}).send()
  } catch (error) {
    next(error)
  }
};


module.exports ={getAll, createProduct , update, deleteProduct}