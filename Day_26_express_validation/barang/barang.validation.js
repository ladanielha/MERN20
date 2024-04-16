const { body } = require("express-validator");
const { BarangModel } = require("./barang.model");

const BarangIDValidator = (target = "_id") => {
  return body(target)
    .exists()
    .withMessage("Field ini harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Field can't empty")
    .bail()
    .isMongoId()
    .withMessage("Format Id tidak valid")
    .bail()
    .custom(async (_id) => {
      const barang = await BarangModel.findOne({ _id });
      if (!barang) {
        throw new Error("Barang tidak ada di database");
      }
    });
};

const BarangNormorValidator = (
  reverse = false,
  optional = false,
  target = "nomor"
) => {
  let validator = body(target);

  if (optional) {
    validator.optional();
  }

  validator
    .exists()
    .withMessage("Field ini harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Field is empty")
    .bail()
    .isLength({ min: 7, max: 7 })
    .withMessage("Field must have 6 character only")
    .bail()
    .custom(async (nomor) => {
      const barang = await BarangModel.findOne({ nomor });
      if (reverse &&  !barang) {
        // digunakan untuk module lain
        //untuk referensikan barang
        // untuk cek apakah barang ada di database
        // dan memastikan nomer barangnya ada
        throw new Error("Duplicate Numbers ");
      }

      if (!reverse && barang) {
        // digunakan untuk module barang saat ini
        throw new Error("Nomor Sudah digunakan!");
      }
    });
  return validator;
};

const BarangNamaValidator = (optional = false, target = "nama") => {
  let validator = body(target);

  if (optional) {
    validator.optional();
  }

  validator
    .exists()
    .withMessage("Field ini harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Field is empty")
    .bail()
    .isLength({ min: 6, max: 100 })
    .withMessage("Field must have 6 character and less then 100 character")
    .bail();
  return validator;
};

const BarangSatuanValidator = (optional = false, target = "satuan") => {
  let validator = body(target);

  if (optional) {
    validator.optional();
  }
  validator
    .exists()
    .exists()
    .withMessage("Field ini harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Field is empty")
    .bail()
    .isLength({ min: 1, max: 10 })
    .withMessage("Field must have more than 1 and less then 10 character ")
    .bail();
  return validator;
};

const BarangHargaValidator = (optional = false, target = "hargaTotal") => {
  let validator = body(target);

  if (optional) {
    validator.optional();
  }
  validator
    .exists()
    .withMessage("Field ini harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Field is empty")
    .bail()
    .isInt({ min: 1000 })
    .withMessage("Field must have more than 1000 ")
    .bail();
  return validator;
};
const BarangStokValidator = (optional = false, target = "stok") => {
  let validator = body(target);

  if (optional) {
    validator.optional();
  }
  validator
    .exists()
    .withMessage("Field ini harus tersedia")
    .bail()
    .notEmpty()
    .withMessage("Field is empty")
    .bail()
    .isLength({ min: 1, max: 10 })
    .withMessage("Field must have more than 1 and less then 10 character ")
    .bail();
  return validator;
};

module.exports = {
  BarangNormorValidator,
  BarangNamaValidator,
  BarangSatuanValidator,
  BarangHargaValidator,
  BarangStokValidator,
  BarangIDValidator
};
