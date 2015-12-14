angular
.module('finalProject')
.factory('User', User)

User.$inject = ['$resource', 'API']
function User($resouce, API){
  return $resource(
    API + '/users/:id',
    {id: '@id'},
    { 'get':     { method: 'GET' },
    'save':    { method: 'POST' },
    'query':   { method: 'GET', isArray: false },
    'remove':  { method: 'DELETE' },
    'delete':  { method: 'DELETE' },
    'register':{ 
     url: API + '/register',
     method: 'POST' },
     'login':  { 
       url: API + '/login',
       method: 'POST'
     },
   }
  );
}