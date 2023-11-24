require("dotenv").config();
const mongoose = require("mongoose");

const geturi = () => {
  let uri;
  if (process.env.NODE_ENV === "development") {
    uri = process.env.DEV_DB_URI;
    uri = uri.replace("<username>", process.env.DB_USER_NAME);
    uri = uri.replace("<password>", process.env.DB_USER_PASS);
  } else {
    uri = process.env.PROD_DB_URI;
  }
  return uri;
};

const connectDB = async () => {
  const connectionUri = geturi();
  console.log("connecting to db ...");
  await mongoose.connect(connectionUri, { dbName: process.env.DB_NAME });
  console.log("connected ...");
};

module.exports = connectDB;
