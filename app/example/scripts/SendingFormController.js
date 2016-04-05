angular
  .module('example')
  .controller('SendingFormController', function($scope, supersonic) {
  	$scope.master = {};

    $scope.navbarTitle = "Learn More";
    this.hello = "some other string";

    this.submit = function (){
      
      // check for empty fields
      if ($scope.master.length == null || $scope.master.length == "") {
        supersonic.logger.debug("Empty length field");
        return;
      }
      if ($scope.master.location == null || $scope.master.location == "") {
        supersonic.logger.debug("Empty location field");
        return;
      }
      if ($scope.master.purpose == null || $scope.master.purpose == "") {
        supersonic.logger.debug("Empty purpose field");
        return;
      }
      
      supersonic.logger.debug($scope.master);
    };
  });
