const express = require("express");
const {
  BarangList,
  BarangCreate,
  BarangDetail,
  BarangUpdate,
  BarangDelete,
} = require("./barang.controller");
const { isAuthenticated, Validate } = require("../libs/lib.middleware");
const { BarangNormorValidator, BarangNamaValidator, BarangSatuanValidator, BarangHargaValidator, BarangStokValidator } = require("./barang.validation");

const BarangRouter = express.Router();

BarangRouter.get("/", [isAuthenticated], BarangList);
BarangRouter.post("/", [
  isAuthenticated,
  Validate([
    BarangNormorValidator(false),
    BarangNamaValidator(),
    BarangSatuanValidator(),
    BarangHargaValidator(),
    BarangStokValidator()
  ])], BarangCreate);
BarangRouter.get("/:id", [isAuthenticated], BarangDetail);
BarangRouter.put("/:id",  [
  isAuthenticated,
  Validate([
    BarangNormorValidator(false, true),
    BarangNamaValidator(true),
    BarangSatuanValidator(true),
    BarangHargaValidator(true),
    BarangStokValidator(true)
  ])],  BarangUpdate);
BarangRouter.delete("/:id", [isAuthenticated], BarangDelete);

module.exports = {
  BarangRouter,
};
