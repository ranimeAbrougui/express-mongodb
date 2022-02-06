const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/docplanner";
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("successfully connect to mongoDB");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;