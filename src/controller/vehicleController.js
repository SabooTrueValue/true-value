const vehicleModel = require("../model/vehicleModel");
const dotenv = require("dotenv");
dotenv.config();

var ImageKit = require("imagekit");
let imageKit = new ImageKit({
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
  urlEndpoint: process.env.urlEndpoint,
});

// // Your existing code for handling file uploads...
// dotenv.config();
// console.log(process.env.publicKey);
// console.log(process.env.privateKey);
// console.log(process.env.urlEndpoint);

const vehicle = async (req, res) => {
    try {
       let data = req.body;
       let files = req.files;
   
    //    console.log(files);
    //    console.log(imageKit);
   
       if (!files || files.length === 0) {
         return res
           .status(400)
           .send({ status: false, message: "No files were provided." });
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
       for (let i = 0; i < files.length && i < 6; i++) {
         if (!files[i].buffer) {
           console.log("Error: Missing 'buffer' property in file:", files[i]);
           return res
             .status(400)
             .send({ status: false, message: "Missing 'buffer' property in file." });
         }
   
         const result = await imageKit.upload({
           file: files[i].buffer, // Use file buffer directly
           fileName: files[i].originalname, // Use original file name
           folder: "/testing/",
         });
   
         // Store the url and fileId in the appropriate image object
         // Assuming you want to store the first image in image1, second in image2, etc.
         data.images[`image${i + 1}`][`img${i + 1}`] = result.url;
         data.images[`image${i + 1}`].fileId = result.fileId;
       }
   
       let saveData = await vehicleModel.create(data);
       return res.status(201).send({ status: true, data: saveData });
    } catch (error) {
       console.error("Error:", error);
       return res.status(500).send({ status: false, message: error.message });
    }
   };
   

module.exports = { vehicle };
