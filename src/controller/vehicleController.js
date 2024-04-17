const vehicleModel = require("../model/vehicleModel");
const dotenv = require("dotenv");
dotenv.config();
const {
  isValidFiles,
  isValidBody,
  isValidObjectId,
  isValidimage,
} = require("../validation/validator");
const moment = require("moment");
require("moment-timezone");
var ImageKit = require("imagekit");
// const { report, get } = require("../router/router");
let imageKit = new ImageKit({
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
  urlEndpoint: process.env.urlEndpoint,
});


//===================================================================================
const vehicle = async (req, res) => {
  try {
    let data = req.body;
    let files = req.files;
    if (isValidBody(data)) {
      return res
        .status(400)
        .send({ status: false, message: "Enter details to create  vehicle" });
    }
    //    console.log(files);
    //    console.log(imageKit);
    if (!isValidFiles(files)) {
      return res
        .status(400)
        .send({ status: false, message: "Image is required" });
    }
    // Initialize images object if it doesn't exist
    data.images = data.images || {
      image1: {},
      image2: {},
      image3: {},
      image4: {},
      image5: {},
      image6: {},
    };

    // Loop through each file and upload it to ImageKit
    for (let i = 0; i < files.length && i < 7; i++) {
      if (!files[i].buffer) {
        console.log("Error: Missing 'buffer' property in file:", files[i]);
        return res.status(400).send({
          status: false,
          message: "Missing 'buffer' property in file.",
        });
      }

      const result = await imageKit.upload({
        file: files[i].buffer, // Use file buffer directly
        fileName: files[i].originalname, // Use original file name
        folder: "/live_testing/",
      });

      // Store the url and fileId in the appropriate image object
      // Assuming you want to store the first image in image1, second in image2, etc.

      data.images[`image${i + 1}`][`img${i + 1}`] = result.url;
      data.images[`image${i + 1}`].fileId = result.fileId;
    }

   moment.tz.setDefault("Asia/Kolkata");
   let dates = moment().format("YYYY-MM-DD");
   let times = moment().format("HH:mm:ss");
   data.date = dates;
   data.time = times;

    let saveData = await vehicleModel.create(data);
    return res.status(201).send({
      status: true,
      data: saveData,
      message: "vehicle created successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

//===================================================================================
const allVehicles = async (req, res) => {
  try {
    let data = req.query;
    let filter = { isDeleted: false };
    if (data.color) {
      let colors = data.color.split(",");
      let enumcolor = [
        "Beige, Brown, Bronze",
        "Black",
        "Blue",
        "Green",
        "Grey",
        "Red, Maroon",
        "Orange",
        "Purple, Voilet, Wine",
        "Silver",
        "White",
        "Yellow",
        "Other",
      ];
      for (let i = 0; i < colors.length; i++) {
        if (!enumcolor.includes(colors[i])) {
          return res.status(400).send({
            status: false,
            message: `color should be ${enumcolor} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.color = {};
      filter.color["$in"] = colors;
    }

    if (data.fuelType) {
      let fuels = data.fuelType.split(",");
      let enumFuel = ["", "Petrol", "Diesel", "CNG", "Electric"];
      for (let i = 0; i < fuels.length; i++) {
        if (!enumFuel.includes(fuels[i])) {
          return res.status(400).send({
            status: false,
            message: `fuels should be ${enumFuel} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.fuelType = {};
      filter.fuelType["$in"] = fuels;
    }
    if (data.vehicleBrand) {
      const enumVehicleBrands = [
        "Audi",
        "BMW",
        "Chevrolet",
        "Citroen",
        "Datsun",
        "Fiat",
        "Ford",
        "Honda",
        "Hyundai",
        "Isuzu",
        "Jaguar",
        "Jeep",
        "Kia",
        "Land Rover",
        "Mahindra",
        "Maruti Suzuki",
        "Mercedes-Benz",
        "MG Motors",
        "Mini",
        "Mitsubishi",
        "Nissan",
        "Renault",
        "Skoda",
        "Tata",
        "Toyota",
        "Volkswagen",
        "Volvo",
      ];
      let vehicleBrands = data.vehicleBrand.split(",");
      for (let i = 0; i < vehicleBrands.length; i++) {
        if (!enumVehicleBrands.includes(vehicleBrands[i])) {
          return res.status(400).send({
            status: false,
            message: `vehicleBrand should be ${enumVehicleBrands} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.vehicleBrand = {};
      filter.vehicleBrand["$in"] = vehicleBrands;
    }
    if (data.userType) {
      const enumUserTypes = [
        "1st owner",
        "2nd owner",
        "3rd owner",
        "4th owner",
      ];
      let userTypes = data.userType.split(",");
      for (let i = 0; i < userTypes.length; i++) {
        if (!enumUserTypes.includes(userTypes[i])) {
          return res.status(400).send({
            status: false,
            message: `userType should be ${enumUserTypes} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.userType = {};
      filter.userType["$in"] = userTypes;
    }
    if (data.vehicleCategory) {
      let enumVehicleCategorys = ["Certified", "Non Certified"];

      let vehicleCategorys = data.vehicleCategory.split(",");
      for (let i = 0; i < vehicleCategorys.length; i++) {
        if (!enumVehicleCategorys.includes(vehicleCategorys[i])) {
          return res.status(400).send({
            status: false,
            message: `vehicleCategory should be ${enumVehicleCategorys} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.vehicleCategory = {};
      filter.vehicleCategory["$in"] = vehicleCategorys;
    }
    if (data.transmission) {
      let enumTransmission = ["Automatic", "Manual"];
      let transmissions = data.transmission.split(",");
      for (let i = 0; i < transmissions.length; i++) {
        if (!enumTransmission.includes(transmissions[i])) {
          return res.status(400).send({
            status: false,
            message: `transmission should be ${enumTransmission} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.transmission = {};
      filter.transmission["$in"] = transmissions;
    }
    if (data.bodyType) {
      const enumBodyType = [
        "Minivan",
        "Hatchback",
        "Sedan",
        "SUV",
        "MUV",
        "Coupe",
        "Convertible",
        "Jeep",
        "Wagon",
      ];
      let bodyTypes = data.bodyType.split(",");
      for (let i = 0; i < bodyTypes.length; i++) {
        if (!enumBodyType.includes(bodyTypes[i])) {
          return res.status(400).send({
            status: false,
            message: `bodyType should be ${enumBodyType} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.bodyType = {};
      filter.bodyType["$in"] = bodyTypes;
    }
    if (data.registeredCity) {
      let EnumRegisteredCity = [
        "Delhi",
        "Bangalore",
        "Mumbai",
        "Pune",
        "Hyderabad",
        "Gurgaon",
        "Noida",
        "Ahmedabad",
        "Chennai",
        "Kolkata",
        "Lucknow",
        "Jaipur",
        "Agra",
        "Allahabad",
        "Aurangabad",
        "Belgaum",
        "Bhopal",
        "Chandigarh",
        "Coimbatore",
        "Faridabad",
        "Ghaziabad",
        "Hubli",
        "Indore",
        "Jodhpur",
        "Kanpur",
        "Kochi",
        "Kottayam",
        "Ludhiana",
        "Madurai",
        "Mangalore",
        "Meerut",
        "Mysore",
        "Nagpur",
        "Nashik",
        "Rajkot",
        "Salem",
        "Sonipat",
        "Surat",
        "Trichy",
        "Tumkur",
        "Vadodara",
        "Warangal",
      ];
      let registeredCitys = data.registeredCity.split(",");
      for (let i = 0; i < registeredCitys.length; i++) {
        if (!EnumRegisteredCity.includes(registeredCitys[i])) {
          return res.status(400).send({
            status: false,
            message: `registeredCity should be ${EnumRegisteredCity} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.registeredCity = {};
      filter.registeredCity["$in"] = registeredCitys;
    }

    if (data.trueValueLocation) {
      let enumTrueValueLocation = [
        "Kompally",
        "Somajiguda",
        "Kushaiguda",
        "Malakpet",
      ];
      let trueValueLocations = data.trueValueLocation.split(",");
      for (let i = 0; i < trueValueLocations.length; i++) {
        if (!enumTrueValueLocation.includes(trueValueLocations[i])) {
          return res.status(400).send({
            status: false,
            message: `trueValueLocation should be ${enumTrueValueLocation} value (with multiple value please give saperated by comma)`,
          });
        }
      }
      filter.trueValueLocation = {};
      filter.trueValueLocation["$in"] = trueValueLocations;
    }
    if (data.priceGreaterThan || data.priceLessThan) {
      filter.price = {};
      if (data.priceGreaterThan && data.priceLessThan) {
        filter.price["$gte"] = data.priceGreaterThan;
        filter.price["$lte"] = data.priceLessThan;
      } else {
        if (data.priceGreaterThan) filter.price["$gte"] = data.priceGreaterThan;
        if (data.priceLessThan) filter.price["$lte"] = data.priceLessThan;
      }
    }
    if (data.yearGreaterThan || data.yearLessThan) {
      filter.modelYear = {};
      if (data.yearGreaterThan && data.yearLessThan) {
        filter.modelYear["$gte"] = data.yearGreaterThan;
        filter.modelYear["$lte"] = data.yearLessThan;
      } else {
        if (data.yearGreaterThan)
          filter.modelYear["$gte"] = data.yearGreaterThan;
        if (data.yearLessThan) filter.modelYear["$lte"] = data.yearLessThan;
      }
    }
    if (data.kmGreaterThan || data.kmLessThan) {
      filter.kmDriven = {};
      if (data.kmGreaterThan && data.kmLessThan) {
        filter.kmDriven["$gte"] = data.kmGreaterThan;
        filter.kmDriven["$lte"] = data.kmLessThan;
      } else {
        if (data.kmGreaterThan) filter.kmDriven["$gte"] = data.kmGreaterThan;
        if (data.kmLessThan) filter.kmDriven["$lte"] = data.kmLessThan;
      }
    }

    let findVechiles = await vehicleModel.find(filter);
    return res.status(200).send({ status: true, data: findVechiles });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getcarsbyID = async (req, res) => {
  try {
    let id = req.params.carId;
    if (!isValidObjectId(id)) {
      return res.status(400).send({
        status: false,
        message: "Please provide valid  Id",
      });
    }
    let vehicleDetails = await vehicleModel.findOne({
      _id: id,
      isDeleted: false,
    });

    if (!vehicleDetails) {
      return res
        .status(404)
        .send({ status: false, message: "no vehicle found" });
    }
    return res
      .status(200)
      .send({ status: true, message: "Success", data: vehicleDetails });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

const getAvailableVehicle = async (req, res) => {

  try {
    let vehicleDetails = await vehicleModel.find({
      isDeleted: false,
      vehicleStatus: "Available",
    });

    if (!vehicleDetails) {
      return res
        .status(404)
        .send({ status: false, message: "no vehicle found" });
    }
    return res
      .status(200)
      .send({ status: true, message: "Success", data: vehicleDetails });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
//===================================================================================
const deletecar = async (req, res) => {
  try {
    let id = req.params.carId;
    if (!isValidObjectId(id)) {
      res
        .status(400)
        .send({ status: false, message: "Please provide valid Product Id" });
    }
    let getId = await vehicleModel.findOne({ _id: id });
    if (!getId) {
      return res.status(404).send({
        status: false,
        message: "vehicle Not Found for the request id",
      });
    }
    if (getId.isDeleted == true) {
      return res.status(404).send({
        status: false,
        message: "vehicle is already deleted not found",
      });
    }
    const fileIds = Object.values(getId.images).map((image) => image.fileId);
    // return res.status(200).send({ status: true, data:fileIds });
    // console.log(fileIds)
    // console.log(fileIds[0]);
    for (let i = 0; i < fileIds.length; i++) {
      if (fileIds[i] == undefined || fileIds == null) {
        continue;
      }
      let deleteImage = imageKit.deleteFile(
        fileIds[i],
        function (error, result) {
          if (error) {
            return res
              .status(500)
              .send({ status: false, message: error.message });
          } else console.log(result);
        }
      );
    }

    await vehicleModel.updateOne(
      { _id: id },
      { isDeleted: true, deletedAt: Date.now() }
    );
    return res.status(200).send({ status: true, message: "car is deleted" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
//====================================================================================
const updatedateVehicle = async (req, res) => {
  let Id = req.params.carId;
  let data = req.body;
  let files = req.files;

  if (!isValidObjectId(Id)) {
    return res
      .status(400)
      .send({ status: false, message: "Please provide valid Product Id" });
  }
  let getId = await vehicleModel.findById({ _id: Id });
  if (!getId) {
    return res
      .status(400)
      .send({ status: false, message: "no vehicle is found" });
  }
  if (getId.isDeleted == true) {
    return res
      .status(404)
      .send({ status: false, message: "vehicle is already deleted" });
  }

  //   console.log(files);
  if (isValidFiles(files)) {
    data.images = getId.images;

    for (let i = 0; i < files.length && i < 6; i++) {
      if (!files[i].buffer) {
        console.log("Error: Missing 'buffer' property in file:", files[i]);
        return res.status(400).send({
          status: false,
          message: "Missing 'buffer' property in file.",
        });
      }

      const result = await imageKit.upload({
        file: files[i].buffer, // Use file buffer directly
        fileName: files[i].originalname, // Use original file name
        folder: "/live_testing/",
      });

      let imageNumber = files[i].fieldname;
      //   console.log(imageNumber);
      //   console.log(Object.keys(getId.images))
      if (Object.keys(getId.images).length < imageNumber) {
        return res.status(400).send({
          status: false,
          message: `${imageNumber} this image is not present to update`,
        });
      }
      // Store the url and fileId in the appropriate image object
      // Assuming you want to store the first image in image1, second in image2, etc.
      data.images[`image${imageNumber}`][`img${imageNumber}`] = result.url;
      data.images[`image${imageNumber}`].fileId = result.fileId;
    }
  }
  let updatedVehicle = await vehicleModel.findByIdAndUpdate({ _id: Id }, data, {
    new: true,
  });
  return res.status(200).send({
    status: true,
    message: "Product updated successfully",
    data: updatedVehicle,
  });
};

module.exports = {
  vehicle,
  allVehicles,
  getcarsbyID,
  deletecar,
  updatedateVehicle,
  getAvailableVehicle,
};
