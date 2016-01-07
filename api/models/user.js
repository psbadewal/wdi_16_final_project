var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  local: {
    username: { type: String }, 
    email:    { type: String, unique: true, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true},
    address: { type: String },
    city: { type: String, required: true},
    state_province: { type: String },
    postal_code: { type: String, required: true},
    country_code:   { type: String},
    hidden: { type: Boolean },
    password: { type: String, required: true }
  }
})

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);