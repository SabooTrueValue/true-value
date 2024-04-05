const express = require("express");
let router = express.Router();

let { register, login } = require("../controller/userController");
let {
  financePostApi,
  financeGetApi,
  finanaceGetByIdApi,
  financeUpdateApi,
  financeDeleteApi,
} = require("../controller/financeController");
let {
  buyPostApi,
  buyGetApi,
  buyGetByIdApi,
  buyUpdateApi,
  buyDeleteApi,
} = require("../controller/buyVehicleController");
let {
  sellPostApi,
  sellGetApi,
  sellGetByIdApi,
  sellUpdateApi,
  sellDeleteApi,
} = require("../controller/sellController");
let {
  popupPostApi,
  popupGetApi,
  popupGetByIdApi,
  popupUpdateApi,
  popupDeleteApi,
} = require("../controller/popupController");

let {
  contactusPostApi,
  contactusGetApi,
  contactusGetByIdApi,
  contactusUpdateApi,
  contactusDeleteApi,
} = require("../controller/contactusController");

let {
  vehicle,
  allVehicles,
  getcarsbyID,
  deletecar,
  updatedateVehicle,
} = require("../controller/vehicleController");

let {
  homequeryPostApi,
  homequeryGetApi,
  homequeryGetByIdApi,
  homequeryUpdateApi,
  homequeryDeleteApi,
} = require("../controller/homequeryController");

let {authentication,authorization} = require("../middleware/auth")



router.get("/test-me", function (req, res) {
  res.send("this is successfully created");
});
router.post("/register", register);
router.post("/login", login);
router.post("/vehicle", vehicle);

// Finance
router.post("/finance", financePostApi);
router.get("/finance", financeGetApi);
router.get("/finance/:id", finanaceGetByIdApi);
router.put("/finance/:id", financeUpdateApi);
router.delete("/finance/:id", financeDeleteApi);

// Buy Vehicle
router.post("/buyVehicle", buyPostApi);
router.get("/buyVehicle", buyGetApi);
router.get("/buyVehicle/:id", buyGetByIdApi);
router.put("/buyVehicle/:id", buyUpdateApi);
router.delete("/buyVehicle/:id", buyDeleteApi);

// Sell Vehicle
router.post("/sell", sellPostApi);
router.get("/sell", sellGetApi);
router.get("/sell/:id", sellGetByIdApi);
router.put("/sell/:id", sellUpdateApi);
router.delete("/sell/:id", sellDeleteApi);

// Popup
router.post("/popup", popupPostApi);
router.get("/popup", popupGetApi);
router.get("/popup/:id", popupGetByIdApi);
router.put("/popup/:id", popupUpdateApi);
router.delete("/popup/:id", popupDeleteApi);

// Contact Us
router.post("/contactus", contactusPostApi);
router.get("/contactus", contactusGetApi);
router.get("/contactus/:id", contactusGetByIdApi);
router.put("/contactus/:id", contactusUpdateApi);
router.delete("/contactus/:id", contactusDeleteApi);

// Home Query
router.post("/homequery", homequeryPostApi);
router.get("/homequery", authentication, authorization, homequeryGetApi);
router.get(
  "/homequery/:id",
  authentication,
  authorization,
  homequeryGetByIdApi
);
router.put("/homequery/:id", authentication, authorization, homequeryUpdateApi);
router.delete(
  "/homequery/:id",
  authentication,
  authorization,
  homequeryDeleteApi
);

// Vehicle

router.post("/vehicle/:userId",authentication,authorization, vehicle);
router.get("/allVehicles/:userId",authentication,authorization, allVehicles);
router.get("/getcarsbyID/:carId", getcarsbyID);
router.put("/updatedateVehicle/:carId/:userId",authentication,authorization, updatedateVehicle);
router.delete("/deletecar/:carId/:userId",authentication,authorization, deletecar);


module.exports = router;
