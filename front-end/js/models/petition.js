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
// To add a signature to a petition, use the post method to 'POST petitions/:petition_id/signatures'. The post method requires params including from certain information from the user = email, first_name, last_name, address(opt.), city, state_province(opt.), city, postal_code, phone(opt.), reason (opt.), hidden(boolean: true or false).
//Question - how do I pass in the parametres in the response string?


Petition.$inject = ['$resource', 'API']
function signPetition($resource, API){
  return $resource(
    API + '/petitions/:petition_id/signatures',
    {petition_id: '@petition_id'},
    { 'post':   { method: 'POST'}
  }
  );
}
