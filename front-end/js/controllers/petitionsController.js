angular
  .module('finalproject')
  .controller('PetitionsController', PetitionsController);

  PetitionsController.$inject = ['Petition', '$state'];
  function PetitionsController(Petition, $state){

    var self = this;

    self.all = Petition.query();
    self.petition = {};
    // self.getPetitions = getPetitions;
  
  // function getPetitions() {
  //   console.log("ARRIVED")
  //   Petition.query(function(data){
  //     return self.all = data.petitions;
  //   });
  // }

  // getPetitions();
  return self
}