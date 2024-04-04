const express = require("express");
const { BarangRouter } = require("./barang/barang.router");
const { UserRouter } = require("./user/user.router");
const { ROUTER_BASE_USER } = require("./user/user.config");
const { ROUTER_BASE_BARANG } = require("./barang/barang.config");
const { MongoDBConnection } = require("./libs/lib.database");

const app = express();

MongoDBConnection();

app.use(express.json());

app.use(ROUTER_BASE_BARANG, BarangRouter);
app.use(ROUTER_BASE_USER, UserRouter);

module.exports = {
  app,
};
