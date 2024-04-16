const { Pagination } = require("../libs/lib.common");
const { ExceptionHandler, Error404 } = require("../libs/lib.exception");
const { OrderModel } = require("./order.model");
const { OrderSearch, OrderFilter } = require("./order.search");

async function OrderList(req, res) {
    try {
      const result = OrderModel.find();
      const resultSearch = OrderSearch(req, result)
      const resultFilter = OrderFilter(req, resultSearch)
      const resultPagination = await Pagination(req, res, resultFilter);
      return res.status(200).json(resultPagination);
    } catch (error) {
      console.error(error);
      return ExceptionHandler(error, res);
    }
  }

async function OrderDetail(req,res) {
    try {

        const result = await OrderModel.findOne({_id: req.params.id})
        if(!result){
            throw Error404("Order not found");
        }
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
      return ExceptionHandler(error, res);
    }
}



async function OrderCreate(req, res){
    try {
        const result = await OrderModel.create(req.body)
        return res.status(201).json(result);
    } catch (error) {
        console.log(error);
        return ExceptionHandler(error, res)
    }
}

module.exports = {
    OrderCreate,
    OrderList, 
    OrderDetail
}