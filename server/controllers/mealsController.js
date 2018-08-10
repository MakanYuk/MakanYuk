const Restaurant = require('../models/restaurant')
const MealEvent = require('../models/mealEvent')
const { responseObj } = require('../helpers/response')

const getMealEvents = (req, res, next) => {
    MealEvent
        .find()
        .populate('host')
        .then(mealEvents => res.status(200).json(responseObj('success get meal events', mealEvents)))
        .catch(res.status(500).json(responseObj('failed get meal events', err)))
}

const getHostedMeals = (req, res, next) => {
    const host = req.user.id
    MealEvent.find({ host })
        .then(mealEvents => res.status(200).json(responseObj('success get hosted meals', mealEvents)))
        .catch(res.status(500).json(responseObj('failed get hosted meals', err)))
}

const hostMeal = (req, res, next) => {

    const host = req.user.id
    const { event_name, event_description, date, guest_limit, price } = req.body
    const restaurant_id = req.body.restaurant_id

    Restaurant.findById(restaurant_id)
        .then(response => {
            const { id, name, location, cuisines, url, user_rating } = response.data

            MealEvent.create({
                host, event_name, event_description, date, guest_limit, price,
                restaurant: { id, name, location, cuisines, url, user_rating }
            })
                .then(newMeal => res.status(201).json(responseObj('success hosting a new meal event', newMeal)))
                .catch(err => res.status(404).json(responseObj('validation error', err)))

        })
        .catch(err => {
            res.status(404).json(responseObj("restaurant not found", err.response.data))
        })
}

const attendMeal = (req, res, next) => {

    const guest_id = req.user.id
    const meal_id = req.body.meal_id

    res.json({guest_id, meal_id})
    // MealEvent.findByIdAndUpdate(meal_id, {
    //     $push: { guests: guest_id }
    // })
    //     .then(changes => res.status(200).json(responseObj('success attend a meal', changes)))
    //     .catch(err => responseObj('error', err))
}

module.exports = {
    getMealEvents,
    getHostedMeals,
    hostMeal,
    attendMeal
}