const mongoose = require("mongoose");
const moment = require("moment");
require("moment-timezone");

moment.tz.setDefault("Asia/Kolkata");
let dates = moment().format("YYYY-MM-DD");
let times = moment().format("HH:mm:ss");

const BuyVehicleSchema = new mongoose.Schema(
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
    carBrand: {
      type: String,
      require: true,
      trim: true,
    },
    carModel: {
      type: String,
      require: true,
      trim: true,
    },
    carVariant: {
      type: String,
      require: true,
      trim: true,
    },
    fuelType: {
      type: String,
      require: true,
      trim: true,
    },
    ownership: {
      type: String,
      require: true,
      trim: true,
    },
    carId: {
      type: String,
      require: true,
      trim: true,
    },

    kmDriven: {
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

module.exports = mongoose.model("BuyVehicle", BuyVehicleSchema);
