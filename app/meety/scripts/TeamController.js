angular
  .module('meety')
  .controller('TeamController', function($scope, supersonic) {
    $scope.emails = [];

    $scope.addEmail = function(newEmail) {
    	if (newEmail) {
	    	$scope.emails.push({ address: newEmail });
	    	$scope.newEmail = "";
    	}
    };

    $scope.removeEmail = function(index) {
    	$scope.emails.splice(index, 1);
    };
  });
