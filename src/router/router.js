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
  getAvailableVehicle,
} = require("../controller/vehicleController");

let {
  homequeryPostApi,
  homequeryGetApi,
  homequeryGetByIdApi,
  homequeryUpdateApi,
  homequeryDeleteApi,
} = require("../controller/homequeryController");

let { authentication, authorization } = require("../middleware/auth");

let { allApiData } = require("../controller/allApiData");

router.get("/test-me", function (req, res) {
  res.send("this is successfully created");
});
router.post("/register", register);
router.post("/login", login);
router.post("/vehicle", vehicle);

// Finance
router.post("/finance", financePostApi);
router.get("/finance/:userId", authentication, authorization, financeGetApi);
router.get("/finance/:id", authentication, authorization, finanaceGetByIdApi);
router.put("/finance/:id", authentication, authorization, financeUpdateApi);
router.delete("/finance/:id", authentication, authorization, financeDeleteApi);

// Buy Vehicle
router.post("/buyVehicle", buyPostApi);
router.get("/buyVehicle/:userId", authentication, authorization, buyGetApi);
router.get("/buyVehicle/:id", authentication, authorization, buyGetByIdApi);
router.put("/buyVehicle/:id", authentication, authorization, buyUpdateApi);
router.delete("/buyVehicle/:id", authentication, authorization, buyDeleteApi);

// Sell Vehicle
router.post("/sell", sellPostApi);
router.get("/sell/:userId", authentication, authorization, sellGetApi);
router.get("/sell/:id", authentication, authorization, sellGetByIdApi);
router.put("/sell/:id", authentication, authorization, sellUpdateApi);
router.delete("/sell/:id", authentication, authorization, sellDeleteApi);

// Popup
router.post("/popup", popupPostApi);
router.get("/popup/:userId", authentication, authorization, popupGetApi);
router.get("/popup/:id", authentication, authorization, popupGetByIdApi);
router.put("/popup/:id", authentication, authorization, popupUpdateApi);
router.delete("/popup/:id", authentication, authorization, popupDeleteApi);

// Contact Us
router.post("/contactus", contactusPostApi);
router.get(
  "/contactus/:userId",
  authentication,
  authorization,
  contactusGetApi
);
router.get(
  "/contactus/:id",
  authentication,
  authorization,
  contactusGetByIdApi
);
router.put("/contactus/:id", authentication, authorization, contactusUpdateApi);
router.delete(
  "/contactus/:id",
  authentication,
  authorization,
  contactusDeleteApi
);

// Home Query
router.post("/homequery", homequeryPostApi);
router.get(
  "/homequery/:userId",
  authentication,
  authorization,
  homequeryGetApi
);
router.get(
  "/homequery/:id",
  authentication,
  authentication,
  authorization,
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
router.post("/vehicle/:userId", authentication, authorization, vehicle);
router.get("/allVehicles/:userId", authentication, authorization, allVehicles);
router.get("/allVehicles/", allVehicles);
router.get("/allavailableVehicles/", getAvailableVehicle);
router.get("/getcarsbyID/:carId", getcarsbyID);
router.put(
  "/updatedateVehicle/:carId/:userId",
  authentication,
  authorization,
  updatedateVehicle
);
router.delete(
  "/deletecar/:carId/:userId",
  authentication,
  authorization,
  deletecar
);

router.get("/allapiData", allApiData);

module.exports = router;
