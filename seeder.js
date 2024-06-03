const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const itemModel = require("./models/itemModel");
const connectDB = require("./config/config");
const items = require("./utils/data");
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await itemModel.deleteMany();
    await itemModel.insertMany(items);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
importData();
