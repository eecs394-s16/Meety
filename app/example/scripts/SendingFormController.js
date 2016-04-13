angular
  .module('example')
  .controller('SendingFormController', function($scope, supersonic, $firebaseObject) {
    $scope.master = {attendees: [{name: "Gergap", attend: true}]};
    $scope.startTime = new Date();
    $scope.endTime = new Date();

    var database = new Firebase("https://glaring-fire-5657.firebaseio.com/meetings");

    $scope.requestMeeting = function (){
      
      // check for empty fields
      if (!$scope.master.location) {
        supersonic.logger.debug("Empty location field");
        return;
      }
      if (!$scope.master.purpose) {
        supersonic.logger.debug("Empty purpose field");
        return;
      }
      if (!$scope.startTime) {
        supersonic.logger.debug("Empty startTime field");
        return;
      }
      if (!$scope.endTime) {
        supersonic.logger.debug("Empty endTime field"); 
        return;
      }
      $scope.master.startTime = $scope.startTime.toJSON();
      $scope.master.endTime = $scope.endTime.toJSON();

      supersonic.logger.debug($scope.master);
      
      database.push($scope.master);

      // reset fields after successful submission
      $scope.master.location = "";
      $scope.master.purpose = "";
      $scope.master.startTime = "";
      $scope.master.endTime = "";
    };
  });
