const mongoose = require("mongoose");

const UserObject = {
    nomor: {type: String, unique: true},
    username: {type: String, require:true},
    email: {type: String, unique: true,},
    password: {type: String, require:true}
};

const UserSchema = new mongoose.Schema(UserObject);

const UserModel = new mongoose.model("user", UserSchema);

module.exports = {
    UserModel, UserObject,  UserSchema
}