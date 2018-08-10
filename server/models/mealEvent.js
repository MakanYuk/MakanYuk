const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealEventSchema = new Schema({
    host: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    event_name: {
        type: String,
        required: [true, `event name is required`]
    },
    description: String,
    restaurant: Object,
    date: {
        type: Date,
        required: [true, 'date is required']
    },
    guest_limit: {
        type: Number,
        default: 1,
        validate: {
            validator: function(value) {
                return this.guests.length > value
            },
            message: `number of guests exceeds the limit`
        }
    },
    guests: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('MealEvent', mealEventSchema)