angular
  .module('finalProject')
  .controller('UsersController', UsersController);

  UsersController.$inject = ['User', 'TokenService', '$state', 'CurrentUser', '$auth'];

  function UsersController(User, TokenService, $state, CurrentUser, $auth){
    var self = this;
    
    self.all           = [];
    self.user          = {};
    self.getUsers      = getUsers;
    self.register      = register;
    self.login         = login;
    self.logout        = logout;
    self.checkLoggedIn = checkLoggedIn;
  }
