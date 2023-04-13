const {loginService, registerService} = require('../services/auth');



/**
 * Register
 */

const registerController = async(req, res, next) => {
  try {
    const {name, image, email, password} = req.body;
    if(!name || !image || !password || !email){
      return res.status(400).json({message: 'Invalid data'})
    }

    const user = await registerService({name, image, email, password});

    return res.status(201).json({message: 'User Created Successfully', user})

  } catch (error) {
    next(error)
  }
};


/**
 * login
 */

const loginController = async(req, res, next) => {
  const {name, password} = req.body;

  try {
    const token = await loginService({name, password});
    return res.status(200).json({message: 'Login Successfully', token})
  } catch (error) {
    next(error)
  }
};

module.exports = {registerController, loginController}