const { UserModel } = require("./user.model");

async function UserList(req, res) {
  try {
    const result = await UserModel.find({
    }, '_id nomor username email');
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Something Error" });
  }
}

async function UserCreate(req, res) {
  try {
    const data = req.body;
    const result = await UserModel.create(data);
    return res.status(201).json(result);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ detail: "Something Error" });
  }
}

async function UserDetail(req, res) {
    try {
        const result = await UserModel.findOne({_id: req.params.id});
        return res.status(200).json(result);
      } catch (error) {
        console.error(error);
        return res.status(400).json({ detail: "Ups Error" });
      }
}

async function UserUpdate(req, res) {
    try {
        const data = await UserModel.findOneAndUpdate(
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

async function UserDelete(req, res) {
    try {
        const data = await UserModel.findOneAndDelete(
            {_id: req.params.id},
        );
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
};
