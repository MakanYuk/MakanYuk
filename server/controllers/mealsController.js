const axios = require('axios')

const Restaurant = require('../models/restaurant')
const Meal = require('../models/meal')
const { responseObj } = require('../helpers/response')

const hostMeal = (req, res, next) => {
    const obj = {
        host: req.user.id,
        date: new Date(req.body.date),
        restaurant: req.body.restaurant_id,
        invitees: req.body.invitees
    }

    Restaurant.findById(res.restaurant_id)
        .then(restaurant => res.status(200).json(restaurant))
        .catch(err => res.status(500).json(err))
    // Meal.create({
    //     host: req.user.id,
    //     restaurant: 
    // })
}

module.exports = {
    hostMeal
}