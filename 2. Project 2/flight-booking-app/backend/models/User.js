const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: String,
    dateOfBirth: Date,
    passport: {
      number: String,
      expiryDate: Date,
      nationality: String
    },
    preferences: {
      seatType: { type: String, enum: ['window', 'aisle', 'middle'], default: 'window' },
      mealType: { type: String, enum: ['vegetarian', 'non-vegetarian', 'vegan'], default: 'vegetarian' },
      frequentFlyer: {
        airline: String,
        number: String
      }
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);