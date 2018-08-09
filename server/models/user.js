const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  hostedMeals: {
    type: Number,
    default: 0
  },
  attendedMeals: {
    type: Number,
    default: 0
  },
  password: String,
  salt: String
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User
