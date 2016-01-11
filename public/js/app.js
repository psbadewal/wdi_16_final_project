angular
  .module('finalproject', [
    'ngResource', 
    'angular-jwt', 
    'ui.router', 
    'mobile-angular-ui', 
    'mobile-angular-ui.gestures'
  ])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
  });

angular
  .module('finalproject')
  .run(function($rootScope){
   $rootScope.$on('$stateChangeStart', function(){
      $rootScope.$broadcast('$routeChangeSuccess');
   });
});

angular
  .module('finalproject')
  .run(function($transform) {
    window.$transform = $transform;
  })

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html",
        controller: "UsersController as us"
      })
      .state('register', {
        url: "/register",
        templateUrl: "register.html",
        controller: "UsersController as us"
      })
      .state('profile', {
        url: "/profile",
        templateUrl: "profile.html"
      })
      .state('petitions', {
        url: "/petitions",
        templateUrl: "petitions.html",
        controller: "PetitionsController as petitions"
      })

    $urlRouterProvider.otherwise("/");
  }

