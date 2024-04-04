const { model } = require("mongoose");

const UserSearch = (req, model) => {
  const { search } = req.query;
  if (search) {
    return model.find({
      $or: [
        { firstname: { $regex: ".*" + search + ".*", $options: "i" } },
        { lastname: { $regex: ".*" + search + ".*", $options: "i" } },
        { email: { $regex: ".*" + search + ".*", $options: "i" } },
      ],
    });
  }
  return model;
};


const UserFilter = (req, model) => { 
    const {field ,value} = req.query;

    if(field && value) {
        return model.find({ [field]: value})
    }

    return model;

}
module.exports = {
  UserSearch, UserFilter
};
