const mongoose = require('mongoose');
const moment = require('moment');
require('moment-timezone');

moment.tz.setDefault('Asia/Kolkata');
let dates = moment().format('YYYY-MM-DD');
let times = moment().format('HH:mm:ss');

const SellSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    mobile: {
      type: String,
      require: true,
      trim: true,
    },
    brandName: {
      type: String,
      require: true,
      trim: true,
    },
    makeOfYear: {
      type: String,
      require: true,
      trim: true,
    },
    carModel: {
      type: String,
      require: true,
      trim: true,
    },
    fuelType: {
      type: String,
      require: true,
      trim: true,
    },
    carVariant: {
      type: String,
      require: true,
      trim: true,
    },
    ownership: {
      type: String,
      require: true,
      trim: true,
    },
    kmDriven: {
      type: String,
      require: true,
      trim: true,
    },
    registeredCity: {
      type: String,
      require: true,
      trim: true,
    },
    transmission: {
      type: String,
      require: true,
      trim: true,
    },
    deletedAt: {
      type: Date,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },

    date: {
      type: String,
      default: dates,
    },
    time: {
      type: String,
      default: times,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Sell', SellSchema)