// run node db.js in the NodeJS folder to start
// ctrl C to exit

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CrudDB");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connection succeeded.");
});

db.on("error", (err) => {
  console.log("Error in Db connection: " + err);
});

module.exports = mongoose;
