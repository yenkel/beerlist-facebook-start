app.factory('authFactory', function($http) {
  var auth = {};

  auth.currentUser = {};

  auth.logout = function(user) {
    return $http.get('/auth/logout')
      .then(function(response) {
        auth.currentUser.username = null;
      });;
  };

  auth.login = function(user) {

  };

  return auth;
});
