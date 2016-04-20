angular
  .module('meety')
  .controller('UserCtrl', function($scope, supersonic) {
    $scope.toggledView = "login";
    $scope.switchView = function(view) {
      $scope.toggledView = view;
    };
    $scope.registerInputs = {};
    $scope.loginInputs = {};
    $scope.login = function(input) {
      //validate the inputs
    };
    $scope.register = function(input) {
      //validate the inputs
    };
  });