angular
.module('finalproject')
.controller('PetitionsController', PetitionsController);

PetitionsController.$inject = ['Petition', '$state'];
function PetitionsController(Petition, $state){

  var self = this;

  self.all = Petition.query();
  self.petition = {};
  self.signPetition = 
  self.rejectPetition =

  self.nextPetition = function(index,isSigned) {
    // console.log(self.all[0]);
    self.all.splice(index, 1);
    // console.log(self.all[0]);
    //save into an array of currentUsers's rejected petitions
    if (isSigned) {
      alert('Thank you for signing')
      //do the signing logic here
      // 'Thanks for signing!'
      // 'Confirmation with the Database end'
      //save into an array of currentUsers's signedPetitions
    }

  }
  // self.currentPetition = petitions[petitionIndex];
  // self.rejectThis = rejectThis;
  // self.signThis   = signThis;

  // this.nextPetition = function() {
  //   petitionIndex = petitionIndex+1;
  //   this.currentPetition = petitions[petitionIndex];
  //   };



    // function rejectThis(petitionId){
    //   //
    // }

    // function signThis(petitionId){
    //   petitionId =+ 1
    // }

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