const searchRouter = require('express').Router()

const { searchRestaurant, searchLocation } = require('../controllers/searchController')

searchRouter.get('/location', searchLocation)
searchRouter.get('/restaurants', searchRestaurant)

module.exports = searchRouter;