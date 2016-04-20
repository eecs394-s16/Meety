angular
  .module('meety')
  .controller('UserCtrl', function($scope, supersonic, Auth) {
    $scope.createUser = function() {
      $scope.message = null;
      $scope.error = null;

      Auth.ref().$createUser({
        email: $scope.email,
        password: $scope.password
      }).then(function(userData) {
        $scope.message = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });
    };
  });