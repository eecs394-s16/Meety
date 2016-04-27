angular
  .module('meety')
  .controller('TeamCtrl', function($scope, supersonic) {

    $scope.emails = [];

    var teamEmails = localStorage.getItem("team");
    if (teamEmails != null){
      $scope.emails = JSON.parse(teamEmails);
    }

    $scope.addEmail = function(newEmail) {
    	if (newEmail) {
        supersonic.logger.debug($scope.emails);
	    	$scope.emails.push(newEmail);
        //add to local storage
        $scope.setTeamStorage()
	    	$scope.newEmail = "";
    	}
    };

    $scope.removeEmail = function(index) {
    	$scope.emails.splice(index, 1);
      $scope.setTeamStorage();
    };

    $scope.setTeamStorage = function(){
      localStorage.setItem("team", JSON.stringify($scope.emails));
    }

    
  });
