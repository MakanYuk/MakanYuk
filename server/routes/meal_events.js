const router = require('express').Router()

const { getMealEvents } = require('../controllers/mealsController')

router.use('/', getMealEvents)

module.exports = router