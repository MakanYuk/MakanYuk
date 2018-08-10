var express = require("express");
var router = express.Router();
const weatherController = require('../controllers/weatherController')

/* GET weather listing. */
router.get('/', weatherController.getWeather);

module.exports = router;
