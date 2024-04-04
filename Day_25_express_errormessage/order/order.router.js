const express = require("express");
const { IsAuthenticated, isAuthenticated } = require("../libs/lib.middleware");
const { OrderCreate, OrderDetail, OrderList } = require("./order.controller");

const OrderRouter = express.Router();

OrderRouter.post('/', [isAuthenticated], OrderCreate);
OrderRouter.get('/', [isAuthenticated], OrderList);
OrderRouter.get('/:id', [isAuthenticated], OrderDetail);

module.exports = {
    OrderRouter
}