angular
.module('finalproject')
.factory('Petition', Petition);

Petition.$inject = ['$resource', 'API']
function Petition($resource, API){
  return $resource(
    API + '/petitions/:id',
    {id: '@id'},
    { 'get':     { method: 'GET' },
    'query':   { method: 'GET', isArray: true }
    }
 );
}