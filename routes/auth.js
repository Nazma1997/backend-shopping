const router = require('express').Router();
const {registerController, loginController} = require('../controllers/auth');


/**
 * Register a user
 * @method POST
 */

router.post('/register', registerController);


/**
 * Logion a user
 * @method POST
 */

router.post('/login', loginController);


module.exports = router