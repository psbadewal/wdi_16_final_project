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

self.authenticate = function(provider) {
  $auth.authenticate(provider);
}

function getUsers()
User.query(function(data){
  return self.all = data.users;
});
}

function handleLogin(res) {
  var token = res.token ? res.token : null;
  if(token) {
    self.getUsers();
    $state.go('home');
  }
//console.log(res)
  self.user = TokenService.decodeToken();
  CurrentUser.saveUser(self.user)
}
