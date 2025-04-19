const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  countryCode: { type: String },
  phone: { type: String },
  inquiry: { type: String, enum: ["myself", "myCompany"], default: "myself" },
  workExp: { type: String, default: "" },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fullName: { type: String },
  email: { type: String },
  age: { type: Number },
  gender: {
    type: String, enum: ["male", "female", "preferNotToSay"]
  },
  location: { type: String },
  education: { type: String },
  occupation: { type: String },
  goals: { type: String },
  priorKnowledge: { type: String }, // Prior experience with sign language
  reasonForJoining: { type: String }, // Optional detailed motivation
  languagePreference: { type: String }, // ISL, ASL, etc.
  learningMode: {
    type: String,
    enum: ["online", "offline", "hybrid"],
    default: "online"
  },
  hasLaptopOrSmartphone: { type: Boolean },
  hasInternetAccess: { type: Boolean },
  additionalNotes: { type: String },
  referralSource: { type: String }, // Where they heard about you
  preferredInstructorGender: {
    type: String,
    enum: ["male", "female", "noPreference"],
    default: "noPreference"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Application", ApplicationSchema);
