const router = require('express').Router()

const { getMealEvents, attendMeal } = require('../controllers/mealsController')

const { auth } = require('../helpers/authHelper')

const isAuthenticated = auth()

router.get('/', getMealEvents)
router.post('/', isAuthenticated, attendMeal)

module.exports = router