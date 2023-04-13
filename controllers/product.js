const Category = require('../models/category');
const service = require('../services/product');
const Product = require('../models/product');

const getAll = async(req, res, next) => {
  try {
    const product = await(await service.findAll()).reverse();
    return res.status(200).json({message: 'Get all product', product})
  } catch (error) {
    next(error)
  }
};

const createProduct = async(req, res, next) => {
  const {id,productName, productQuantity, productPrice, productCategory, productImage} = req.body;

  try {
    const categoryId = await Category.findById(productCategory);

    if(!categoryId){
      return res.status(404).json({message: 'Category not found'});
    };

    const product = await service.create({id,productName, productQuantity, productPrice, productCategory: categoryId._id, productImage});

    await product.save();
    categoryId.productId.push(product._id);
    await categoryId.save();

    return res.status(201).json({message: 'Product create successfully', product})

  } catch (error) {
    next(error)
  }
};


const update = async(req, res, next) => {
  const productId = req.params.productId;
  const {id,productName, productQuantity,  productPrice, productCategory, productImage} = req.body;

  try {
    const product = await service.findByProperty('_id', productId);
    if(!product){
      throw error('Product not found', 400);
    }

    product.id = id ?? product.id;
    product.productName = productName ?? product.productName;
    product.productQuantity = productQuantity ?? product.productQuantity;
    product.productPrice = productPrice ?? product.productPrice;
    product.productCategory = productCategory ?? product.productCategory;
    product.productImage = productImage ?? product.productImage;

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