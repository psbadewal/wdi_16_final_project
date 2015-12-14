angular
  .module('finalProject', ['ngResource', 'angular-jwt', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor')
  });

  MainRouter.$inject = ['
  $stateProvider', 
  '$urlRouterProvider'];

  function MainRouter(
    $stateProvider,
    $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'register.html'
    })
    .state('profile', {
      url: '/users',
      templateUrl: 'users.html'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'users.html'
    })

    $urlRouterProvider.
    otherwise('/')
  }