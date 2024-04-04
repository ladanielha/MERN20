const express = require("express");
const {
  UserList,
  UserCreate,
  UserDetail,
  UserUpdate,
  UserDelete,
  SignIn,
} = require("./user.controller");
const { isAuthenticated } = require("../libs/lib.middleware");

const UserRouter = express.Router();

UserRouter.post("/", UserCreate);
UserRouter.post("/signin", SignIn);

UserRouter.get("/", [isAuthenticated], UserList);
UserRouter.get("/:id", [isAuthenticated], UserDetail);
UserRouter.put("/:id", [isAuthenticated], UserUpdate);
UserRouter.delete("/:id", [isAuthenticated], UserDelete);

module.exports = {
  UserRouter,
};
