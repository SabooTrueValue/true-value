const mongoose = require("mongoose");

const moment = require("moment");
require("moment-timezone");

moment.tz.setDefault("Asia/Kolkata");
let dates = moment().format("YYYY-MM-DD");
let times = moment().format("HH:mm:ss");

const vehicleSchema = new mongoose.Schema(
  {
    location: { type: String },
    satus: { type: String },
    title: { type: String },
    brand: { type: String },
    overview: { type: String },
    userType: { type: String },
    category: { type: String },
    transmission: { type: String },
    bodyType: { type: String },
    price: { type: String },
    fuel: { type: String },
    modelYear: { type: String },
    engineCapcity: { type: String },
    registeredCity: { type: String },
    color: { type: String },
    registeredNumber: { type: String },
    kmDriven: { type: Number },
    images: {
      image1: {
        fileId: { type: String },
        img1: { type: String },
      },
      image2: { fileId: { type: String }, img2: { type: String } },
      image3: { fileId: { type: String }, img3: { type: String } },
      image4: { fileId: { type: String }, img4: { type: String } },
      image5: { fileId: { type: String }, img5: { type: String } },
      image6: { fileId: { type: String }, img6: { type: String } },
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

module.exports = mongoose.model("vehicle", vehicleSchema);
