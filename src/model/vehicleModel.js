const mongoose = require("mongoose");

const moment = require("moment");
require("moment-timezone");

moment.tz.setDefault("Asia/Kolkata");
let dates = moment().format("YYYY-MM-DD");
let times = moment().format("HH:mm:ss");

const vehicleSchema = new mongoose.Schema(
  {
    trueValueLocation: {
        type: String,
        required: true,
    },
    vehicleStatus: {
        type: String,
        required: true,
    },
    vehicleTitle: {
        type: String,
        required: true,
    },
    vehicleBrand: {
        type: String,
        required: true,
    },
    vehicleOverview: {
        type: String,
        required: true,
        maxlength: [500, "Vehicle Overview must be at most 500 characters long"]
    },
    seatingCapacity: {
        type: Number,
        required: true,
        min: [1, "Seating Capacity must be at least 1"],
        max: [12, "Seating Capacity must be at most 12"]
    },
    userType: {
        type: String,
        required: true,
    },
    vehicleCategory: {
        type: String,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    bodyType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be at least 0"],
        max: [10000000, "Price must be at most 10000000"]
    },
    fuelType: {
        type: String,
        required: true,
    },
    modelYear: {
        type: Number,
        required: true,
        min: [0, "Model Year must be at least 0"]
    },
    engineCapacity: {
        type: String,
        required: true,
    },
    registeredCity: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    registrationNo: {
        type: String,
        required: true,
    },
    kmDriven: {
        type: Number,
        required: true,
        min: [0, "KM Driven must be at least 0"],
        max: [500000, "KM Driven must be at most 500000"]
    },
    accessories :{
        Sunroof: { type: Boolean, required: true },
        LeatherSeats: { type: Boolean, required: true },
        AlloyWheels: { type: Boolean, required: true },
        FogLights: { type: Boolean, required: true },
        Navigation: { type: Boolean, required: true },
        Bluetooth: { type: Boolean, required: true },
        ReverseCamera: { type: Boolean, required: true },
        CruiseControl: { type: Boolean, required: true },
        ParkingSensors: { type: Boolean, required: true },
        AirConditioning: { type: Boolean, required: true },
        ClimateControl: { type: Boolean, required: true },
        PowerSteering: { type: Boolean, required: true },
        PowerWindows: { type: Boolean, required: true },
        PowerMirrors: { type: Boolean, required: true },
        PowerSeats: { type: Boolean, required: true },
        HeatedSeats: { type: Boolean, required: true },
        CooledSeats: { type: Boolean, required: true },
        MemorySeats: { type: Boolean, required: true }
    },
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
