const buyModel = require("../model/buyVehicleModel");
const moment = require("moment");
require("moment-timezone");

const buyPostApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = req.body;
    moment.tz.setDefault("Asia/Kolkata");
    let dates = moment().format("YYYY-MM-DD");
    let times = moment().format("HH:mm:ss");
    data.date = dates;
    data.time = times;
    let saveData = await buyModel.create(data);
    res.status(201).send({ status: true, data: saveData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const buyGetApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = await buyModel
      .find({ isDeleted: false })
      .sort({ createdAt: -1 });
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const buyGetByIdApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = await buyModel.findById(id);
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const buyUpdateApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = req.body;
    let updateData = await buyModel.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send({ status: true, data: updateData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const buyDeleteApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = await buyModel.findByIdAndDelete(id);
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  buyPostApi,
  buyGetApi,
  buyGetByIdApi,
  buyUpdateApi,
  buyDeleteApi,
};
