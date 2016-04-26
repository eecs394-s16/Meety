angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting, $timeout, $filter) {
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
        $scope.meetings = Meeting.all(authData.uid);
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
      // only if there are currently meetings
      if ($scope.meetings.length) {
        $scope.enableEdit = !$scope.enableEdit;
        $scope.buttonStatus = !$scope.buttonStatus;
      }
  };

    // remove meeting function, not used since can use firebase remove function
    $scope.removeMeeting = function(meeting) {

      // filter the date to be standard mm/dd/yyyy
      var d = $filter('date')(meeting.theDate, 'shortDate');
      // filter the start time to be hh:mm pm
      var t = $filter('date')(meeting.startTime, 'shortTime');
      // build the message string
      var m = "Purpose: " + meeting.purpose + "\n" +
              "Location: " + meeting.loc + "\n" + 
              "Date and Time: " + d + ", " + t;

      // options object for alert with meeting message and confirm/cancel buttons
      var options = {
        message: m,
        buttonLabels: ["Yes","Cancel"]
      };
      // send confirmation alert when user tries to delete meeting
      supersonic.ui.dialog.confirm("Are you sure you want to delete this meeting?", options).then(function(index) {
        if (index == 0) {
          // remove the meeting if user confirms
          $scope.meetings.$remove(meeting).then(function() {

          // if user has deleted the only remaining meeting, toggle buttons back to normal
          if ($scope.meetings.length == 0)
          {
            $scope.editMeeting();
          }
        });

        } else {
          // otherwise do nothing and send a message to the debug logger
          // supersonic.logger.log("User canceled deletion");
        }
      });

    };

    // skeleton for editing permission
    $scope.editPermission = function(id) {
      // return id == user.id
      return true;
    };
  });
