const { body } = require("express-validator");
const { OrderModel } = require("./order.model")

const OrderNomorValidator = (target = "nomor") => {
  return body(target)
    .exists()
    .withMessage("Field harus tersedia!")
    .notEmpty()
    .withMessage("Field tidak boleh kosong.")
    .isLength({ min: 6, max: 6 })
    .withMessage("Nomor hanya menerima tepat 6 karakter.")
    .bail()
    .custom(async (nomor) => {
      const order = await OrderModel.findOne({ nomor });
      if (order) {
        throw new Error("Duplicate number");
      }
    })
    .bail();
};

const OrderCustomerValidator = (target = "customer") => {
  return body(target)
    .exists()
    .withMessage("Field harus tersedia!")
    .bail()
    .notEmpty()
    .withMessage("Field tidak boleh kosong.")
    .bail()
    .isObject()
    .withMessage("Format not match")
    .bail();
};

const OrderTanggalValidator = (target = "tanggal") => {
  return body(target)
    .exists()
    .withMessage("Field harus tersedia!")
    .bail()
    .notEmpty()
    .withMessage("Field tidak boleh kosong.")
    .bail()
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage("Format date is YYYY-MM-DD")
    .bail();
};

const OrderDibayarValidator = (target = "dibayar") => {
  return body(target)
    .exists()
    .withMessage("Field harus tersedia!")
    .bail()
    .notEmpty()
    .withMessage("Field tidak boleh kosong.")
    .bail()
    .isInt()
    .withMessage("Field must numbers")
    .bail();
};

const OrderTotalValidator = (target = "dibayar") => {
  return OrderDibayarValidator(target);
};

const OrderItemsValidator = (target = "items") => {
  return body(target)
    .exists()
    .withMessage("Fild harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Fild tidak boleh kosong")
    .bail()
    .isArray({ min: 1 })
    .withMessage("Minimal terdapat 1 item dalam array")
    .bail();
};

const OrderItemsQtyValidator = (target = "items.*.qty") => {
  return body(target)
    .exists()
    .withMessage("Field ini harus tersedia!")
    .bail()
    .notEmpty()
    .withMessage("Field ini harus diisi!")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Format harus bilangan bulat minimal qty pembelian sebesar 1.")
    .bail();
};

const OrderItemsSubtotalValidator = (target = "items.*.qty") => {
  return body(target)
    .exists()
    .withMessage("Field ini harus tersedia!")
    .bail()
    .notEmpty()
    .withMessage("Field ini harus diisi!")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Format harus bilangan bulat minimal qty pembelian sebesar 1.")
    .bail();
};

module.exports = {
  OrderNomorValidator,
  OrderCustomerValidator,
  OrderTanggalValidator,
  OrderDibayarValidator,
  OrderTotalValidator,
  OrderItemsValidator,
  OrderItemsQtyValidator,
  OrderItemsSubtotalValidator
};
