const sellModel = require("../model/sellModel");
const sellPostApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = req.body;
    let saveData = await sellModel.create(data);
    res.status(201).send({ status: true, data: saveData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
const sellGetApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let data = await sellModel.find({ isDeleted: false });
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const sellGetByIdApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = await sellModel.findById(id);
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const sellUpdateApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = req.body;
    let updateData = await sellModel.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send({ status: true, data: updateData });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const sellDeleteApi = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    let id = req.params.id;
    let data = await sellModel.findByIdAndDelete(id);
    res.status(200).send({ status: true, data: data });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  sellPostApi,
  sellGetApi,
  sellGetByIdApi,
  sellUpdateApi,
  sellDeleteApi,
};
