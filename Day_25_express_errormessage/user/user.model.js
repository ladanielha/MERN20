const mongoose = require("mongoose");

const UserObject = {
    firstname: {type: String, default:null},
    lastname: {type: String, default:null},
    email: {type: String, unique: true, require:true},
    password: {type: String, require:true}
};

const UserSchema = new mongoose.Schema(UserObject);

const UserModel = new mongoose.model("user", UserSchema);

module.exports = {
    UserModel, UserObject,  UserSchema
}