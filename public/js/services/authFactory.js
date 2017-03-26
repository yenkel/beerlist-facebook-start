app.factory('authFactory', function($http) {
  var auth = {};

  auth.currentUser = {};

  auth.logout = function(user) {
    //todo
  };
  
  return auth;
});
