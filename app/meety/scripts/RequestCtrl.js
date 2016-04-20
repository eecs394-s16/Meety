angular
  .module('meety')
  .controller('RequestCtrl', function($scope, supersonic, Meeting) {
    $scope.master = {attendees: [{name: "Gergap", attend: true}]};
    $scope.startTime = null;
    $scope.endTime = null;

    $scope.requestMeeting = function (){
      
      var options = {
        message: "The following fields are empty:\n",
        buttonLabel: "Close"
    };
      // check for empty fields
      if (!$scope.startTime) {
        supersonic.logger.debug("Empty startTime field");
        options.message += "Start Time\n";
      }
      if (!$scope.endTime) {
        supersonic.logger.debug("Empty endTime field"); 
        options.message += "End Time\n";
      }
      if (!$scope.master.loc) {
        supersonic.logger.debug("Empty location field");
        options.message += "Location\n";
      }
      if (!$scope.master.purpose) {
        supersonic.logger.debug("Empty purpose field");
        options.message += "Purpose\n";
      }
      if (options.message != "The following fields are empty:\n")
      {
        supersonic.ui.dialog.alert("Error creating meeting", options).then(function() {
        supersonic.logger.log("Alert closed.");
        });
        return;
      }
      $scope.master.startTime = $scope.startTime.toJSON();
      $scope.master.endTime = $scope.endTime.toJSON();

      supersonic.logger.debug($scope.master);
      
      Meeting.add($scope.master).then(function(ref) {
        var rsvpView = new supersonic.ui.View('meety#rsvp');
        supersonic.ui.layers.push(rsvpView, { params: { id: ref.key() } });
      });

      $scope.resetMaster();
    };

    $scope.resetMaster = function() {
      $scope.master.loc = "";
      $scope.master.purpose = "";
      $scope.master.startTime = null;
      $scope.master.endTime = null;
      $scope.startTime = null;
      $scope.endTime = null;
    };
  });
