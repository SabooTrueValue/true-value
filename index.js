const express = require("express");
const mongoose = require("mongoose");
const route = require("./src/router/router");
const dotenv = require('dotenv');
const cors = require("cors");
const multer = require("multer");
const fs = require('fs');

dotenv.config();

const app = express();

// Configure multer to store files in memory as buffers
const upload = multer({ storage: multer.memoryStorage() });

app.use(upload.any());
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.cluster,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));
app.use("/", route);

app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});