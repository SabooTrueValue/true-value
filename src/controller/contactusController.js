const contactusModel = require('../model/contactusModel');
const moment = require('moment');
require('moment-timezone');

const contactusPostApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let data = req.body;
        moment.tz.setDefault("Asia/Kolkata");
        let dates = moment().format("YYYY-MM-DD");
        let times = moment().format("HH:mm:ss");
        data.date = dates;
        data.time = times;
        let saveData = await contactusModel.create(data);
        res.status(201).send({ status: true, data: saveData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const contactusGetApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let data = await contactusModel.find({ isDeleted: false });
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const contactusGetByIdApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = await contact
        usModel.findById(id);
        res.status(200).send({ status: true, data: data });
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const contactusUpdateApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = req.body;
        let updateData = await contactusModel.findByIdAndUpdate(id, data, { new: true });
        res.status(200).send({ status: true, data: updateData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const contactusDeleteApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = await contactusModel.findByIdAndDelete(id);
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = {
    contactusPostApi,
    contactusGetApi,
    contactusGetByIdApi,
    contactusUpdateApi,
    contactusDeleteApi
}
