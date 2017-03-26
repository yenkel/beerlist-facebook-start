app.controller('AuthCtrl', function($scope, authFactory, $state) {
  $scope.currentUser = authFactory.currentUser

  $scope.login = function() {
    //todo
  }
});
