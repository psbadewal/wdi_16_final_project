angular
  .module('finalproject')
  .directive('isLoaded', function (){
    return{
     scope: false,
     restrict: 'A',
     link: function (scope, elements, arguments){ 
      console.log("Preparing");
      if (scope.$last) {
        console.log('$emitting content-changed');
        scope.$emit('content-changed');
      }
    }   
  }
})