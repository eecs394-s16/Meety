angular
  .module('meety')
  .controller('TeamCtrl', function($scope, supersonic) {

    // list of emails
    $scope.emails = [];

    // if a valid new email, push it to the list, updates display
    $scope.addEmail = function(newEmail) {
    	if (newEmail) {
	    	$scope.emails.push({ address: newEmail });
	    	$scope.newEmail = "";
    	}
    };

    // removes email at index from the list
    $scope.removeEmail = function(index) {
    	$scope.emails.splice(index, 1);
    };
  });
