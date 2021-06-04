import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

const VERY_SECRET_KEY = "akjngfwoeinoi2n3n2rlk3nlknslf";
app.use(cookieParser(VERY_SECRET_KEY));
app.use(bodyParser.json());

const {MONGO_HOST = "localhost", MONGO_USER = "root", MONGO_PASSWORD = "example", MONGO_DB = "code_academy"}

await mongoose.connect(
  `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

import AuhtController from "./AuthController.js";
import GraphQlController from "./GraphQlController.js";
import SampleController from "./SampleController.js";
import GeoCodingController from "./geocoding/GeoCodingController.js";
import FruitsController from "./fruits/FruitsController.js";
import CarsController from "./cars/CarsController.js";

AuhtController(app);
GraphQlController(app);
SampleController(app);
GeoCodingController(app);
FruitsController(app);
CarsController(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
