const router = require('express').Router()

const { getHostedMeals, hostMeal } = require('../controllers/mealsController')

const { auth } = require('../helpers/authHelper')

const isAuthenticated = auth()

router.get('/', isAuthenticated, getHostedMeals)
router.post('/', isAuthenticated, hostMeal)

module.exports = router