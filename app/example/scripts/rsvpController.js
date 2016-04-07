angular
  .module('example')
  .controller('rsvpController', function($scope, supersonic, $firebaseObject) {
    //Readability constants
    const buttonStatusEnum = {
      UNCONFIRMED: 0,
      ACCEPTED: 1,
      REJECTED: 2
    }

    $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;

    var ref = new Firebase("https://glaring-fire-5657.firebaseio.com/meetings/" + steroids.view.params.id);
    var syncObject = $firebaseObject(ref);
    syncObject.$bindTo($scope, "meetingSpecs");

    $scope.acceptMeeting = function(newName){
      supersonic.logger.debug("Accept meeting!");
      if (newName) {
        $scope.meetingSpecs.attendees.push({ name: newName, attend: true });
	      $scope.buttonStatus = buttonStatusEnum.ACCEPTED;
      }
    };

    $scope.rejectMeeting = function(newName){
      supersonic.logger.debug("Reject meeting!");
      if (newName) {
        $scope.meetingSpecs.attendees.push({ name: newName, attend: false });
	      $scope.buttonStatus = buttonStatusEnum.REJECTED;
      }
    };
  });
