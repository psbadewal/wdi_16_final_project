angular
  .module('finalproject')
  .directive('tinder', Tinder);

Tinder.$inject = ['$http'];
function Tinder($http) {
  return {
    // Restrict it to be an attribute in this case
    restrict: 'A',
    
    // responsible for registering DOM listeners as well as updating the DOM
    link: function(scope, element, attrs) {
      scope.$on('content-changed', function() {
        console.log("jTinder is ready!");

        // jTinder initialization
        $(element).jTinder({
          onDislike: function (item) {
            $('#status').html('Dislike image ' + (item.index()+1));
          },
          onLike: function (item) {
            $('#status').html('Like image ' + (item.index()+1));

            // // Simple GET request example:
            // $http({
            //   method: 'POST',
            //   url: '/petitions/' + + 
            // }).then(function successCallback(response) {
            //     // this callback will be called asynchronously
            //     // when the response is available
            //   }, function errorCallback(response) {
            //     // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            //   });
          },
          animationRevertSpeed: 200,
          animationSpeed: 400,
          threshold: 1,
          likeSelector: '.like',
          dislikeSelector: '.dislike'
        });

        // Set button action to trigger jTinder like & dislike.
        $('.actions .like, .actions .dislike').click(function(e){
          e.preventDefault();
          $("#tinderslide").jTinder($(this).attr('class'));
        });
      });
    }
  }
}