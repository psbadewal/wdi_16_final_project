// Require scrapers
var all  = require("./all");

var mongoose       = require('mongoose');
var config         = require('../config/config');

mongoose.connect(config.database);

// Get everything from the url: https://www.change.org/petitions.json
all();