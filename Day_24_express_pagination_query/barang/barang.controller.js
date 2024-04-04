const { Pagination } = require("../libs/lib.common");
const { BarangModel } = require("./barang.model");
const { BarangSearch, BarangFilter } = require("./barang.search");

async function BarangList(req, res) {
  try {
    const result =  BarangModel.find();
    const resultSearch =  BarangSearch(req, result);
    const resultFilter=   BarangFilter(req, resultSearch);
    const resultPagination=  await Pagination(req, res, resultFilter);
    return res.status(200).json(resultPagination);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Ups Error" });
  }
}

async function BarangCreate(req, res) {
  try {
    const data = req.body;
    const result = await BarangModel.create(data);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Ups Error" });
  }
}

async function BarangDetail(req, res) {
    try {
        const result = await BarangModel.findOne({_id: req.params.id});
        return res.status(200).json(result);
      } catch (error) {
        console.error(error);
        return res.status(400).json({ detail: "Ups Error" });
      }
}

async function BarangUpdate(req, res) {
    try {
        const data = await BarangModel.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body,
            {new:true}
        );
        return res.status(200).json(data);
      } catch (error) {
        console.error(error);
        return res.status(400).json({ detail: "Ups Error" });
      }
}

async function BarangDelete(req, res) {
    try {
        const data = await BarangModel.findOneAndDelete(
            {_id: req.params.id},
        );
        return res.status(204).json(null);
      } catch (error) {
        console.error(error);
        return res.status(400).json({ detail: "Ups Error" });
      } 
    
}

module.exports = {
  BarangList,
  BarangCreate,
  BarangDetail,
  BarangUpdate,
  BarangDelete,
};
