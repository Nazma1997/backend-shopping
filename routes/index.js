const router = require('express').Router();
const categoryRoutes = require('./category');
const reviewRoutes = require('./review');
const productRoutes = require('./product');
const authRoutes = require('./auth')
const userRoutes = require('./user');

router.use('/products', productRoutes);
router.use('/categories',categoryRoutes );
router.use('/reviews', reviewRoutes);
router.use('/api', authRoutes)
router.use('/user', userRoutes)

module.exports = router;