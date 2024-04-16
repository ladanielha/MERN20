const express = require("express");
const { isAuthenticated, Validate } = require("../libs/lib.middleware");
const {
  CustomerCreate,
  CustomerUpdate,
  CustomerList,
  CustomerDetail,
} = require("./customer.controller");
const {
  CustomerNomorValidator,
  CustomerNamaValidator,
  CustomerTeleponValidator,
  CustomerAlamatValidator,
} = require("./customer.validation");
const { body } = require("express-validator");

const CustomerRouter = express.Router();

CustomerRouter.get("/", [isAuthenticated], CustomerList);

CustomerRouter.post(
  "/",
  [
    isAuthenticated,
    Validate([
      CustomerNomorValidator(),
      CustomerNamaValidator(),
      CustomerTeleponValidator(),
      CustomerAlamatValidator(),
    ]),
  ],
  CustomerCreate
);
CustomerRouter.get("/:id", [isAuthenticated], CustomerDetail);
CustomerRouter.put(
  "/:id",
  [
    isAuthenticated,
    Validate([
      CustomerNomorValidator(),
      CustomerNamaValidator(),
      CustomerTeleponValidator(),
      CustomerAlamatValidator(),
    ]),
  ],
  CustomerUpdate
);

module.exports = {
  CustomerRouter,
};
