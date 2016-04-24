angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting, $timeout) {
    // list of meetings
    $scope.meetings = [];
    // change between Edit and Done button
    $scope.buttonStatus = true;
    // show/hide delete buttons
    $scope.enableEdit = false;

    // check for authentication, if successful, get meetings from firebase
    // else, don't show any meetings
    $scope.getMeetings = function() {
      var authData = JSON.parse(localStorage.getItem("authData"));
      if (authData) {
        $scope.meetings = Meeting.all();
      } else {
        $scope.meetings = [];
      }
    };
    
    $timeout($scope.getMeetings, 100);

    supersonic.ui.views.current.whenVisible( function() {
      $scope.getMeetings();
    });

    // toggle bools for edit button and delete button
    $scope.editMeeting = function(){
      $scope.enableEdit = !$scope.enableEdit;
      $scope.buttonStatus = !$scope.buttonStatus;
  };

    // remove meeting function, not used since can use firebase remove function
    $scope.removeMeeting = function(index) {

      var currMeeting = $scope.meetings[index];
      var options = {
        message: "blerg",
        // message: "Purpose: " + currMeeting.purpose + "\n" +
        //          "Location: " + currMeeting.loc + "\n" + 
        //          "Date and Time: " + currMeeting.date: 'shortTime' + " | " + currMeeting.startTime,
        buttonLabels: ["Yes","Cancel"]
      };
      supersonic.logger.debug(currMeeting);
      supersonic.ui.dialog.confirm("Are you sure you want to delete this meeting?", options).then(function(index) {
        if (index == 0) {
          $scope.meetings.splice(index, 1);
          $scope.buttonStatus = !$scope.buttonStatus;
        } else {
          supersonic.logger.log("User canceled deletion");
        }
      });

    };

    // skeleton for editing permission
    $scope.editPermission = function(id) {
      // return id == user.id
      return true;
    };
  });
