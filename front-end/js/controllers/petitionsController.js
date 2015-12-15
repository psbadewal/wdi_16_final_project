angular
  .module('finalproject')
  .controller('PetitionsController', petitionsController);

  PetitionsController.$inject = ['User', '$state', 'CurrentUser'];

  function PetitionsController(Petition, $state, CurrentUser){

    var self = this;

    self.all = [];
    self.petition = {};
    self.getPetitions = getPetitions;
  
  function getPetitions() {
    Petition.query(function(data){
      return self.all = data.petitions;
      console.log(data.petitions);
    });

  }
  return self.getPetitions();
}