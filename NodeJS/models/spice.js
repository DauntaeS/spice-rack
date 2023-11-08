const mongoose = require("mongoose");

let Spice = mongoose.model("Spice", {
  name: { type: String },
  quantity: { type: Number },
  amount: { type: String },
  description: { type: String },
  dateAdded: { type: String },
  expDate: { type: String },
});

module.exports = { Spice };
