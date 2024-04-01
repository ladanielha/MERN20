const express = require("express");
const app = express();

const { BarangRouter } = require("./route/barang.route");


app.use('/barang', BarangRouter);

module.exports = {
    app
}