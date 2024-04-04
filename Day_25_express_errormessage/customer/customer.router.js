const express = require("express");
const { isAuthenticated } = require("../libs/lib.middleware");

const { CustomerCreate } = require("./customer.controller");
const { CustomerNomorValidator, CustomerNamaValidator, CustomerTeleponValidator, CustomerAlamatValidator } = require("./customer.validation");
const { body } = require("express-validator");

const CustomerRouter = express.Router();

CustomerRouter.post('/', [isAuthenticated], CustomerCreate)

module.exports = {
  CustomerRouter
}