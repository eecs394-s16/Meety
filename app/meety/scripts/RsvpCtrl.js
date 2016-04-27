angular
  .module('meety')
  .controller('RsvpCtrl', function($scope, supersonic, Meeting, User, $timeout) {

    $scope.unselected = true;
    var authData = JSON.parse(localStorage.getItem('authData'));
    if (authData) {
      User.find(authData.uid).$bindTo($scope, 'user');
      Meeting.findAttendee(steroids.view.params.id, authData.uid).$bindTo($scope, 'attendee');
      $timeout($scope.checkAttendee, 200);
    }
    // bind firebase meeting object to meetingSpecs
    Meeting.find(steroids.view.params.id).$bindTo($scope, 'meetingSpecs'); 

    // function to respond as accepting meeting
    $scope.acceptMeeting = function(){
      // check if user is logged in
      if (authData) {
        supersonic.logger.debug("Accept meeting!");
        // push new attendee to firebase object, updating meetingSpecs and display
        // update button status field to show accepted button selected
          Meeting.addAttendee(steroids.view.params.id, authData.uid, $scope.user.name, true);
          $scope.unselected = false;
      }
    };

    $scope.rejectMeeting = function(){
      if (authData) {
        supersonic.logger.debug("Reject meeting!");
          Meeting.addAttendee(steroids.view.params.id, authData.uid, $scope.user.name, false);
          $scope.unselected = false;
      }
    };

    $scope.checkAttendee = function(){
      $scope.unselected = true;
      if ($scope.attendee.name == $scope.user.name){
        $scope.unselected = false;
      }
    }
  });
