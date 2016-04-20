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

    $scope.loginUser = function() {
      Auth.ref().$authWithPassword({
        email: $scope.email2,
        password: $scope.password2
      }).then(function(userData) {
        $scope.message2 = "User authenticated with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error2 = error;
      });
    };
  });
