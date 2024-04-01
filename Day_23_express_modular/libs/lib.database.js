const mongoose = require("mongoose");

const MONGO_URI = "mongodb://0.0.0.0:27017/api-belajar-express"

const configDB = {
  useNewUrlParser: true
}

const MongoDBConnection = () => {
  mongoose.connect(MONGO_URI, configDB).then(() => {
    console.log("Success Connected to MONGODB")
  }).catch((error) => {
    console.log("Failed Conntect to MongoDB");
    console.error(error);
  })
}

module.exports = {
  MongoDBConnection
}