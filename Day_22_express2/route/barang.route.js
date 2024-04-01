const express = require("express");
const { CreateBarang, GetAllBarang, GetDetailBarang, UpdateBarang, DeleteBarang } = require("../controller/BarangController");


const BarangRouter = express.Router();

BarangRouter.get('/',GetAllBarang);
BarangRouter.post('/',CreateBarang);
BarangRouter.get('/:id',GetDetailBarang);
BarangRouter.put('/:id',UpdateBarang);
BarangRouter.delete('/:id',DeleteBarang);

module.exports = {
    BarangRouter
}