const { UserModel } = require("./user.model");
const bcrpyt = require("bcryptjs");
const {
  isUserExist,
  ValidatePassword,
  MakeJWTToken,
} = require("./user.services");
const { UserSearch, UserFilter } = require("./user.search");
const { Pagination } = require("../libs/lib.common");

async function UserList(req, res) {
  try {
    // Get From DB
    const result =  UserModel.find();

    // Search
    const resultSearch =  UserSearch(req, result);

    // filtering
    const resultFilter =  UserFilter(req, resultSearch);

    // pagination
    const resultPagination = await Pagination(req, res, resultFilter);

    // Send Result
    return res.status(200).json(resultPagination);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Something Error" });
  }
}

async function SignIn(req, res) {
  try {
    //id user exist
    const user = await isUserExist(req.body.email);

    //validate passsword is match
    await ValidatePassword(req, user);

    //process token
    const payload = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    };
    const token = MakeJWTToken(payload);

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Something Error" });
  }
}

async function UserCreate(req, res) {
  try {
    const passwordHash = await bcrpyt.hash(req.body.password, 10);
    await UserModel.create({ ...req.body, password: passwordHash });
    const { password, ...payload } = req.body;
    return res.status(201).json(payload);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Something Error" });
  }
}

async function UserDetail(req, res) {
  try {
    const result = await UserModel.findOne(
      { _id: req.params.id },
      "_id nomor firstname lastname email"
    );
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Ups Error" });
  }
}

async function UserUpdate(req, res) {
  try {
    const data = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Ups Error" });
  }
}

async function UserDelete(req, res) {
  try {
    const data = await UserModel.findOneAndDelete({ _id: req.params.id });
    return res.status(204).json(null);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Ups Error" });
  }
}

module.exports = {
  UserList,
  UserCreate,
  UserDetail,
  UserUpdate,
  UserDelete,
  SignIn,
};
