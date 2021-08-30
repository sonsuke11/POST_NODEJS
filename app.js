const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
connectDB();
app.listen(PORT, () => console.log(`listen on port ${PORT}`));
