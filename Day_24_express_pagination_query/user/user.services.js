const { UserModel } = require("./user.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const isUserExist = async (email) => {
    const result = await UserModel.findOne({email});

    if (!result) {
        throw new Error("Email Not Found");
    }

    return result;

}

const ValidatePassword = async (req, user) => {
    if (!(await bcrypt.compare(req.body.password, user.password))) {
     throw new Error ("Password not match");
    }
}

const MakeJWTToken =  (payload) => {
  const token = jwt.sign(
    payload, 
    process.env.TOKEN_KEY,
    { expiresIn: "1h" }
  )

  return token;
} 

module.exports ={ 
    isUserExist, ValidatePassword, MakeJWTToken
}