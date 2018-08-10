var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController')
const searchRoute = require("./search");
const weatherRoute = require("./weather");
const users = require("./users");
const mealEventsRoute = require('../routes/meal_events')
const hostedMealRoute = require('../routes/hosted_meals') 

router.use("/users", users);
router.use("/search", searchRoute);
router.use("/meal_events", mealEventsRoute)
router.use("/user/hosted_meals", hostedMealRoute)
router.use("/weather", weatherRoute);

/* GET home page. */
router.get("/", function(req, res) {
	res.send("This Api Works!");
});
router.post('/signup', userController.registerUser)
router.post('/login', userController.login)
router.post('/fblogin', userController.fbLogin)


module.exports = router;
