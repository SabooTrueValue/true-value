const mongoose = require('mongoose');
const moment = require('moment');
require('moment-timezone');

moment.tz.setDefault("Asia/Kolkata");
let dates = moment().format("YYYY-MM-DD");
let times = moment().format("HH:mm:ss");

const ContactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    phone: {
      type: String,
      require: true,
      trim: true,
    },
    message: {
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
module.exports = mongoose.model("ContactUs", ContactUsSchema);