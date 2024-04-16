const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

const configDB = {
  useNewUrlParser: true,
};

const MongoDBConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, configDB);
    console.log("Success Connected to MongoDB");
  } catch (error) {
    console.error("Failed to Connect to MongoDB");
    console.error(error);
    // Optionally, you might want to throw the error here or handle it in some way.
    throw error;
  }
};

module.exports = {
  MongoDBConnection,
};
