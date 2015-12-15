var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/petitions-app")

// Require scrapers
var all  = require("./tasks/all");
var sign = require("./tasks/sign");

// Get everything from the url: https://www.change.org/petitions.json
all();
// sign();

// get_id();