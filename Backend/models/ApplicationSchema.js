const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  countryCode: { type: String, required: true },
  phone: { type: String, required: true },
  inquiry: { type: String, enum: ["myself", "myCompany"], default: "myself" },
  workExp: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Application", ApplicationSchema);
