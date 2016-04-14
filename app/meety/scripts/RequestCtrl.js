angular
  .module('meety')
  .controller('RequestCtrl', function($scope, supersonic, Meeting) {
    $scope.master = {attendees: [{name: "Gergap", attend: true}]};
    $scope.startTime = null;
    $scope.endTime = null;

    $scope.requestMeeting = function (){
      
      // check for empty fields
      if (!$scope.master.loc) {
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
      Meeting.add($scope.master);
      $scope.resetMaster();
      var confirmation = {message: "Meeting request successfully created.", buttonLabel: "Great!"};

      supersonic.ui.dialog.alert("Success", confirmation);
    };

      // reset fields after successful submission

    $scope.resetMaster = function() {
      $scope.master.loc = "";
      $scope.master.purpose = "";
      $scope.master.startTime = null;
      $scope.master.endTime = null;
      $scope.startTime = null;
      $scope.endTime = null;
    };
  });
