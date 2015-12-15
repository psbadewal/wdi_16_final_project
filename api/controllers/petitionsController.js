var Petition = require('../models/petition');

function petitionsIndex(req, res){
  console.log("Arrived in Petitions Index")
  Petition.find({}, function(err, petitions){
    if(err) return res.status(404).send(err);
    res.status(200).send(petitions);
  });
}

function petitionsShow(req, res){
  var id = req.params.id;

  Petition.findById({ _id: id },
    function(err, petition) {
      if (err) return res.status(500).send(err);
      if(!petition) return res.status(404).send(err);

      res.status(200).send(petition);
    })
}

module.exports = {
  petitionsIndex: petitionsIndex,
  petitionsShow: petitionsShow
}