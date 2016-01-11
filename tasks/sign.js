module.exports = function(petition_id, user){
  var serialize   = require("../helpers/serialize");
  var SHA256      = require("crypto-js/sha256");
  var rp          = require("request-promise"); 
  var getAuthKey  = require("./auth_key");

  var api_key      = process.env.CHANGE_API_KEY;
  var secret_token = process.env.CHANGE_API_SECRET;
  var email        = user.local.email;
  var first_name   = user.local.first_name; 
  var last_name    = user.local.last_name; 
  var address      = user.local.address;
  var city         = user.local.city;
  var state_province = user.local.state_province;
  var postal_code    = user.local.postal_code;
  var country_code   = user.local.country_code;
  var source         = "http://www.website.com/" + new Date();

  getAuthKey(petition_id, source, email, function(response) {
    var my_petition_auth_key = JSON.parse(response).auth_key;
    var base_url             = "https://api.change.org";
    var endpoint             = "/v1/petitions/" + petition_id + "/signatures";
    var url                  = base_url + endpoint;
    var date                 = new Date();

    // Parameters
    var params = {
      api_key: api_key,
      timestamp: date.toISOString(),
      endpoint: endpoint,
      source: source,
      email: email,
      first_name: first_name,
      last_name: last_name,
      address: address,
      city: city,
      state_province: state_province,
      postal_code: postal_code,
      country_code: country_code,
    }

    // Build request signature.
    var query_string_with_secret_and_auth_key = serialize(params) + secret + my_petition_auth_key;

    // Add the request signature to the parameters array.
    params.rsig = SHA256(query_string_with_secret_and_auth_key);

    var data = serialize(params);
    var headers = { 
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0'
    };

    rp({ 
      method: "post",
      url: url, 
      body: data, 
      headers: headers 
    }).then(function(res) {
      console.log("Signing petition...");
      return console.log(res);
    });
  });
}