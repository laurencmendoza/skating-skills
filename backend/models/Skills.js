///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const SkillsSchema = new Schema({
  name: String,
  mastery: Number,
  category: String,
  notes: String,
},{timestamps: true});

module.exports = mongoose.model("Skills", SkillsSchema);

