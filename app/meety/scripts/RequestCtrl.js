angular
  .module('meety')
  .controller('RequestCtrl', function($scope, supersonic, Meeting) {
  	$scope.master = {attendees: [{name: "Gergap", attend: true}]};

    $scope.requestMeeting = function (){
      
      // check for empty fields
      if (!$scope.master.length) {
        supersonic.logger.debug("Empty length field");
        return;
      }
      if (!$scope.master.location) {
        supersonic.logger.debug("Empty location field");
        return;
      }
      if (!$scope.master.purpose) {
        supersonic.logger.debug("Empty purpose field");
        return;
      }
      if (!$scope.master.hour) {
        supersonic.logger.debug("Empty hour field");
        return;
      }
      if (!$scope.master.minutes) {
        supersonic.logger.debug("Empty minutes field");
        return;
      }
      if (!$scope.master.ampm) {
        supersonic.logger.debug("Empty AM/PM field");
        return;
      }
      
      supersonic.logger.debug($scope.master);
      Meeting.add($scope.master);
      $scope.resetMaster();
    };

    $scope.resetMaster = function() {
      $scope.master.length = "";
      $scope.master.location = "";
      $scope.master.purpose = "";
      $scope.master.hour = "";
      $scope.master.minutes = "";
      $scope.master.ampm = "";
    };
  });
