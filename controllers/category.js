const service = require('../services/category');
const Category = require('../models/category')

const getAll = async(req, res, next) => {
  try {
    const categories = await(await service.findAll()).reverse();
    return res.status(200).json( categories)
  } catch (error) {
    next(error)
  }
};

const createProduct = async(req, res, next) => {
  const {categoryName, productId} = req.body;

  try {

    const product = await service.create({categoryName, productId});
    await product.save();
  
    return res.status(201).json({message: 'Category created successfully', product})

  } catch (error) {
    next(error)
  }
};


const update = async(req, res, next) => {
  const updateId = req.params.updateId;
  const {categoryName, productId} = req.body;

  try {
    // const product = await service.findByProperty('_id', id);
    const product = await Category.findByIdAndUpdate(updateId)

    if(!product){
      throw error('Product not found', 400);
    }

    product.categoryName = categoryName ?? product.categoryName;
    product.productId = productId ?? product.productId;
   

    await product.save();

    return res.status(200).json({message: 'Category updated successfully', product})
  } catch (error) {
     next(error)
  }
};

const deleteProduct = async(req, res, next) => {
  const productId = req.params.productId;

  try {
    const product = await Category.findByIdAndRemove(productId);
    if(!product){
      throw error('Product not found', 400);
    }

    return res.status(203).json({message: 'Product deleted successfully', product}).send()
  } catch (error) {
    next(error)
  }
};


module.exports ={getAll, createProduct , update, deleteProduct}