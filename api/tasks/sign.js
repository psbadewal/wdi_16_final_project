module.exports = function(){
  var serialize   = require("../helpers/serialize");
  var SHA256      = require("crypto-js/sha256");
  var rp          = require("request-promise"); 
  var getAuthKey  = require("./auth_key");

  var api_key      = CHANGE_API_KEY;
  var secret_token = CHANGE_API_SECRET;
  var petition_id = 5128194;
  var email       = "psbadewal@outlook.com";
  var source      = "http://www.website.com/" + new Date();

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
      first_name: "Alex",
      last_name: "Chin",
      address: "68 Hanbury Street",
      city: "London",
      state_province: "London",
      postal_code: "E1 5JL",
      country_code: "US",
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