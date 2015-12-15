module.exports  = function(){
  var rp   = require("request-promise");
  var serialize = require("../helpers/serialize");
  var Petition  = require("../models/petition");

  var base_url  = "https://www.change.org/petitions.json";
  var page      = 2;
  var headers   = { 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0'
  };
  var params    = {
    page: page
  }
  var url = base_url + "?" + serialize(params);

  scrape(url);
  function scrape(url) {
    return rp({ url: url, headers: headers }).then(function(res){
      var petitions = JSON.parse(res).petitions;

      petitions.forEach(function(petition) {
        console.log("Preparing " + petition.title);

        Petition.findOne({"remote.id" : petition.id }, function(err, localPetition) {
          if (err) return console.log("There was an error searching " + err);
          if (localPetition) return console.log("Already exists... update?");

          var newPetition          = new Petition();
          newPetition.remote.id    = petition.id;
          newPetition.petition_id  = petition.petition_id;
          newPetition.title        = petition.title;
          newPetition.description  = petition.description;
          newPetition.photo_id     = petition.photo_id;
          newPetition.media_url    = petition.media_url;
          newPetition.media_text   = petition.media_text;

          newPetition.save(function(err, localPetition){
            if (err) return console.log("There was an error saving " + err);
            console.log(localPetition.title + " was saved!");
          });
        });
      });

      if (petitions.last_page) {
        return process.exit()
      } else {
        page = page + 1;
        params    = {
          page: page
        }
        url  = base_url + "?" + serialize(params);
        return scrape(url);
      }
    });
  }
}