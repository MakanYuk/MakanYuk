const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required']
  },
  hostedMeals: {
    type: Number,
    default: 0
  },
  attendedMeals: {
    type: Number,
    default: 0
  },
  password: {
    type: String,
    required: [true, 'password is required']
  }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User
