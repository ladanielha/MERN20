const mongoose = require("mongoose");

const BarangObject = {
    nomor: {type: String, unique: true},
    nama: {type: String, require:true},
    satuan: {type: String},
    hargaTotal: {type: Number},
    stok: {type: Number},
};

const BarangSchema = new mongoose.Schema(BarangObject);

const BarangModel = new mongoose.model("Barang", BarangSchema);

module.exports = {
    BarangModel, BarangObject,  BarangSchema
}