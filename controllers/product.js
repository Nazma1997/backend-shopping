const service = require('../services/product');
const Product = require('../models/product');

const getAll = async(req, res, next) => {
  try {
    const products = await(await service.findAll()).reverse();
    return res.status(200).json( products)
  } catch (error) {
    next(error)
  }
};

const createProduct = async(req, res, next) => {
 const {name, writersName, description, image, category, type} = req.body

  try {
   

    const product = await service.create({name, writersName, description, image, category, type});

    await product.save();

    return res.status(201).json({message: 'Product create successfully', product})

  } catch (error) {
    next(error)
  }
};


const update = async(req, res, next) => {
  const productId = req.params.productId;
  const { name, writersName, description, image, category} = req.body;

  try {
    const product = await service.findByProperty('_id', productId);
    if(!product){
      throw error('Product not found', 400);
    }


    product.name = name ?? product.name;
    product.image = image ?? product.image;
    product.writersName = writersName ?? product.writersName;
    product.description = description ?? product.description;
    product.category = category ?? product.category;

    await product.save();

    return res.status(200).json({message: 'Product updated successfully', product})
  } catch (error) {
     next(error)
  }
};

// const deleteProduct = async(req, res, next) => {
//   const productId = req.params.productId;

//   try {
//     const item = await service.findByProperty('_id', productId);
//     if(!item){
//       throw error('Product not found', 400);
//     }

//     await item.remove();

//     return res.status(203).json({message: 'Product deleted successfully', item}).send()
//   } catch (error) {
//     next(error)
//   }
// };  

const deleteProduct = async(req, res, next) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findByIdAndRemove(productId);
    if(!product){
      throw error('Product not found', 400);
    }

    return res.status(203).json({message: 'Product deleted successfully', product}).send()
  } catch (error) {
    next(error)
  }
};


module.exports ={getAll, createProduct , update, deleteProduct}