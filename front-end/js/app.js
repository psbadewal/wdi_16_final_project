angular
  .module('finalproject', ['ngResource', 'angular-jwt', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
  });

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "register.html"
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

  // $(document).ready(function(){

  //     $(".buddy").on("swiperight",function(){
  //       $(this).addClass('rotate-left').delay(700).fadeOut(1);
  //       $('.buddy').find('.status').remove();

  //       $(this).append('<div class="status like">Like!</div>');      
  //       if ( $(this).is(':last-child') ) {
  //         $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
  //        } else {
  //           $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
  //        }
  //     });  

   