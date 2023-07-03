const express = require('express');
const router = express.Router();
// importing controller
const userController = require('../controller/userController');
router.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Web Working Successfully',
  });
});
// user controller with routes
router.post('/api/v1/create-user', userController.createUser);
router.post('/api/v1/login-user', userController.loginUser);
router.post('/api/v1/reset-password', userController.forgotPassword);

// exporting routes
module.exports = router;
