angular 
.module('finalproject')
.factory('Petition', Petition);

Petition.$inject = ['$resource', 'API']

function $resource(
  API + '/petitions/:id', {id: '@id'},
  { 'get':   {  method: 'GET' },       
  { 'query': {  method: 'GET' },       
}
}
) 