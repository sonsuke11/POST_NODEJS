const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    console.log("DB connected!!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
