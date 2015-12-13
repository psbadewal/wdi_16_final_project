var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  local: {
    username: { type: String }, 
    fullname: { type: String },
    email:    { type: String, unique: true, required: true },
    password: { type: String, required: true },
  }
})