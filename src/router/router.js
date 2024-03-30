const express = require("express");
let router = express.Router();

let{register, login} = require("../controller/userController") 

let {vehicle}= require("../controller/vehicleController")

router.post("/register", register)
router.post("/login",login)


router.post("/vehicle",vehicle)
module.exports = router;
