const router = require('express').Router()

const { hostMeal } = require('../controllers/mealsController')

const { isAuthenticated } = require('../helpers/authHelper')

router.post('/', isAuthenticated(), hostMeal)

module.exports = router