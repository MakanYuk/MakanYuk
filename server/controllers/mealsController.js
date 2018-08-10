const axios = require('axios')

const Restaurant = require('../models/restaurant')
const MealEvent = require('../models/mealEvent')
const { responseObj } = require('../helpers/response')

const hostMeal = (req, res, next) => {

    const host = req.user.id
    const event_name = req.body.inputEventName
    const description = req.body.inputEventDescriptin
    const date = req.body.inputDate
    const guest_limit = req.body.inputGuestLimit
    const restaurant_id  = req.body.inputRestaurant

    Restaurant.findById(restaurant_id)
        .then(restaurant => {
            if (restaurant) {
                const { id, name, location, cuisines, url, user_rating } = restaurant
                const mealEvent = {
                        host, event_name, description, date, guest_limit,
                        restaurant: { id, name, location, cuisines, url, user_rating }
                    }
                res.status(200).json(mealEvent)
                // MealEvent.create({
                //     host, event_name, description, date, guest_limit,
                //     restaurant: { id, name, location, cuisines, url, user_rating }
                // })
                //     .then(newMeal => res.status(201).json(responseObj('success hosting a new meal event', newMeal)))
                //     .catch(err => res.status(404).json(responseObj('validation error', err)))
            } else {
                res.status(404).json(responseObj('restaurant not found'))
            }
        })
        .catch(err => {
            console.log(err)
            //res.status(500).json(responseObj('error', err))
        })
}

module.exports = {
    hostMeal
}