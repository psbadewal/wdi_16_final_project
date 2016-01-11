var mongoose = require("mongoose");

var petitionSchema = mongoose.Schema({
  petition_id: Number,
  title: String,
  description: String,
  photo_id: Number,
  media_url: String,
  media_text: String,
  remote: {
    id: Number
  }
})

module.exports = mongoose.model("Petition", petitionSchema);