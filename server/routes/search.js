const searchRouter = require('express').Router()

const { searchRestaurant } = require('../controllers/restaurantsController')

searchRouter.get('/restaurants', searchRestaurant)

module.exports = searchRouter;