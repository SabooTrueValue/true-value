const buyVehicleModel = require('../model/buyVehicleModel');
const financeModel = require('../model/financeModel');
const homequeryModel = require('../model/homequeryModel');
const popupModel = require('../model/popupModel');
const sellModel = require('../model/sellModel');
// const userModel = require('../model/userModel');
const vehicleModel = require('../model/vehicleModel');
const contactusModel = require('../model/contactusModel');


const allApiData = async (req, res) => {
    try{
        const soldVehicleData = await vehicleModel.find({vehicleStatus: "Sold"}).count();
        const availableVehicleData = await vehicleModel.find({vehicleStatus: "Available"}).count();
        const totalVehicle = await vehicleModel.find().count();

        const financeData = await financeModel.find().count();
        const homequeryData = await homequeryModel.find().count();
        const popupData = await popupModel.find().count();
        const sellData = await sellModel.find().count();
        // const userData = await userModel.find().count();
        const vehicleData = await vehicleModel.find().count();
        const contactusData = await contactusModel.find().count();
         res.status(200).send({soldVehicleData, availableVehicleData, financeData, homequeryData, popupData, sellData, vehicleData, contactusData, totalVehicle});
    }
    catch (error) {
        console.log(error);
          return res
            .status(500)
            .send({ status: false, message: error.message });
    }
}


module.exports = {allApiData}