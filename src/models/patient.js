const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  state: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model("Patient", PatientSchema);
