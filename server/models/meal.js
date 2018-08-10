const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mealSchema = new Schema({
    host: { type: Schema.Types.ObjectId, ref: 'User' },
    restaurant_id: String,
    date: Date,
    invitees: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Meal', mealSchema)