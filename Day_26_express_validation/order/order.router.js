const express = require("express");
const { IsAuthenticated, isAuthenticated, Validate } = require("../libs/lib.middleware");
const { OrderCreate, OrderDetail, OrderList } = require("./order.controller");
const { OrderNomorValidator, OrderTanggalValidator, OrderCustomerValidator, OrderDibayarValidator, OrderTotalValidator, OrderItemsValidator, OrderItemsQtyValidator, OrderItemsSubtotalValidator } = require("./orderr.validation");
const { BarangIDValidator, BarangNormorValidator, BarangNamaValidator, BarangSatuanValidator, BarangHargaValidator, BarangStokValidator } = require("../barang/barang.validation");
const { CustomerNomorValidator, CustomerAlamatValidator, CustomerNamaValidator, CustomerTeleponValidator, CustomerIDValidator } = require("../customer/customer.validation");

const OrderRouter = express.Router();

OrderRouter.get('/', [isAuthenticated], OrderList);
OrderRouter.post('/', [
    isAuthenticated,
    Validate([
        OrderNomorValidator(),
        OrderTanggalValidator(),
        OrderCustomerValidator(),
        CustomerIDValidator(),
        CustomerNomorValidator(true, false, "customer.nomor"),
        CustomerNamaValidator(false, "customer.nama"),
        CustomerAlamatValidator(false, "customer.alamat"),
        CustomerTeleponValidator(false, "customer.telepon"),
        OrderDibayarValidator(),
        OrderTotalValidator(),
        OrderItemsValidator(),
        OrderItemsQtyValidator(),
        OrderItemsSubtotalValidator(),
        BarangIDValidator("items.*._id"),
        BarangNormorValidator(true, false, "items.nomor"),
        BarangNamaValidator(false, "items*.*nama"),
        BarangSatuanValidator(false, "items.*.satuan"),
        BarangHargaValidator(false,"items.*.hargaTotal"),
        BarangStokValidator(false,"items.*.stok")
      ])], OrderCreate);
OrderRouter.get('/:id', [isAuthenticated], OrderDetail);

module.exports = {
    OrderRouter
}