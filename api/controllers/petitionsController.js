var Petition = require('../models/petition');
var User     = require('../models/user');
var sign     = require('../tasks/sign');

function petitionsIndex(req, res){
  Petition.find({}, function(err, petitions){
    if (err) return res.status(404).send(err);

    if (petitions.length > 20) {
      petitions = petitions.slice(0, 20);
    }

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

function petitionsSign(req, res) {
  var petition_id = req.params.id;
  var user_id = req.body.user_id;

  User.findById(user_id, function(err, user){
    if (err) return res.status(500).send(err);

    sign(petition_id, user);
    return res.json({message: "Signed!" });
  })
}

module.exports = {
  petitionsIndex: petitionsIndex,
  petitionsShow: petitionsShow,
  petitionsSign: petitionsSign,
}