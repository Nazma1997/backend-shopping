const router = require('express').Router();
const reviewRoutes = require('./review');
const productRoutes = require('./product');
const authRoutes = require('./auth')
const userRoutes = require('./user');

router.use('/api/v1/advance', productRoutes);
router.use('/api/v1/intemediate', reviewRoutes);
router.use('/user', userRoutes)
router.use('/api/v1/auth', authRoutes)

module.exports = router;