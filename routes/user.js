const router = require('express').Router();
const {getAllUsers, postUser, patchUserById, deleteUserById} = require('../controllers/user');

/**
 * Post a user 
 * @method POST
 */

router.post('/', postUser);

/**
 * Get all users
 * @method GET
 */

router.get('/', getAllUsers);

/**
 * @method PATCH
 */
router.patch('/:id', patchUserById);
/**
 * @method DELETE
 */

router.delete('/:id', deleteUserById);

module.exports = router;