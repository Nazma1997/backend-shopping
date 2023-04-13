const router = require('express').Router();
const controller = require('../controllers/category');

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

router.patch('/:updateId', controller.update);

/**
 * @method DELETE
 */

router.delete('/:productId', controller.deleteProduct);



module.exports = router;