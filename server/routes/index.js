var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    msg: 'home',
  });
});
router.post('/signup', userController.registerUser)
router.post('/login', userController.login)
router.post('/fblogin', userController.fbLogin)


module.exports = router;
