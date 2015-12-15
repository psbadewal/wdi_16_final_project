module.exports = function(petition_id, source, email, callback) {
  var rp           = require("request-promise");
  var serialize    = require("../helpers/serialize");
  var SHA256       = require("crypto-js/sha256");

  var api_key      = process.env.CHANGE_API_KEY;
  var secret_token = process.env.CHANGE_API_SECRET;
  var host         = "https://api.change.org";
  var endpoint     = "/v1/petitions/"+petition_id+"/auth_keys";
  var request_url  = host + endpoint;
  var date         = new Date();

  var params = {
    api_key: api_key,
    source_description: "Website",
    source: source,
    requester_email: email,
    timestamp: date.toISOString(),
    endpoint: endpoint
  }

  // Build request signature and add it as a parameter
  var query_string_with_secret_and_auth_key = serialize(params);

  // Add the request signature to the parameters array.
  params.rsig = SHA256(query_string_with_secret_and_auth_key + secret_token)
  
  var query = serialize(params);
  var headers = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0'
  };

  rp({ 
    method: "post",
    url: request_url, 
    body: query,
    headers: headers 
  }).then(callback);
}