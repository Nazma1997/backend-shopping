const router = require('express').Router();
const controller = require('../controllers/product');

/**
 * @method GET
 */
router.get('/', controller.getAll);


/**
 * @method POST
 */

router.post('/', controller.createProduct);


/**
 * @method PATCH
 */

router.patch('/:productId', controller.update);

/**
 * @method DELETE
 */

router.delete('/:productId', controller.deleteProduct);



module.exports = router;