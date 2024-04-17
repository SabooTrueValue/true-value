const homequerModel = require("../model/homequeryModel");
const moment = require("moment");
require("moment-timezone");

const homequeryPostApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = req.body;
    moment.tz.setDefault("Asia/Kolkata");
    let dates = moment().format("YYYY-MM-DD");
    let times = moment().format("HH:mm:ss");
    data.date = dates;
    data.time = times;
    let saveData = await homequerModel.create(data);
    res.status(201).send({ status: true, data: saveData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const homequeryGetApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = await homequerModel.find({ isDeleted: false });
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const homequeryGetByIdApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = await homequerModel.findById(id);
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const homequeryUpdateApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = req.body;
    let updateData = await homequerModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).send({ status: true, data: updateData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const homequeryDeleteApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = await homequerModel.findByIdAndDelete(id);
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  homequeryPostApi,
  homequeryGetApi,
  homequeryGetByIdApi,
  homequeryUpdateApi,
  homequeryDeleteApi,
};
