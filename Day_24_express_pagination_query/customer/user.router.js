const express = require("express");
const { UserList, UserCreate, UserDetail, UserUpdate, UserDelete } = require("./user.controller");

const UserRouter = express.Router();

UserRouter.get('/', UserList);
UserRouter.post('/', UserCreate);
UserRouter.get('/:id', UserDetail);
UserRouter.put('/:id', UserUpdate);
UserRouter.delete('/:id', UserDelete);

module.exports = {
  UserRouter
}