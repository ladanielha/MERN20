const express = require("express");
const {
  BarangList,
  BarangCreate,
  BarangDetail,
  BarangUpdate,
  BarangDelete,
} = require("./barang.controller");
const { isAuthenticated } = require("../libs/lib.middleware");

const BarangRouter = express.Router();

BarangRouter.get("/", [isAuthenticated], BarangList);
BarangRouter.post("/", [isAuthenticated], BarangCreate);
BarangRouter.get("/:id", [isAuthenticated], BarangDetail);
BarangRouter.put("/:id", [isAuthenticated], BarangUpdate);
BarangRouter.delete("/:id", [isAuthenticated], BarangDelete);

module.exports = {
  BarangRouter,
};
