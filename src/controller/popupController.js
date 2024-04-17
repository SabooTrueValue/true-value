const popupModel = require('../model/popupModel');


const popupPostApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let data = req.body;
        
        let saveData = await popupModel.create(data);
        res.status(201).send({ status: true, data: saveData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const popupGetApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let data = await popupModel.find({ isDeleted: false });
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const popupGetByIdApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = await popupModel.findById(id);
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const popupUpdateApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = req.body;
        let updateData = await popupModel.findByIdAndUpdate(id, data, { new: true });
        res.status(200).send({ status: true, data: updateData });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const popupDeleteApi = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        let id = req.params.id;
        let data = await popupModel.findByIdAndDelete(id);
        res.status(200).send({ status: true, data: data });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = {
    popupPostApi,
    popupGetApi,
    popupGetByIdApi,
    popupUpdateApi,
    popupDeleteApi
}
