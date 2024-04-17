const financeModel = require('../model/financeModel');
const moment = require('moment');
require('moment-timezone');

const financePostApi = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let data = req.body;
        moment.tz.setDefault('Asia/Kolkata');
        let dates = moment().format('YYYY-MM-DD');
        let times = moment().format('HH:mm:ss');
        data.date = dates;
        data.time = times;
        let saveData = await financeModel.create(data);
        res.status(201).send({ status: true, data: saveData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}


const financeGetApi = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let data = await financeModel.find({ isDeleted: false });
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const finanaceGetByIdApi = async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        try {
            let id = req.params.id;
            let data = await financeModel.findById(id);
            res.status(200).send({ status: true, data: data });
        } catch (error) {
            return res.status(500).send({ status: false, message: error.message });
        }
    }

const financeUpdateApi = async (req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = req.body;
        let updateData = await financeModel.findByIdAndUpdate

        (id, data, { new: true });
        res.status(200).send({ status: true, data: updateData });
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const financeDeleteApi = async (req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = await financeModel.findByIdAndDelete(id);
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { financePostApi, financeGetApi, finanaceGetByIdApi, financeUpdateApi, financeDeleteApi }