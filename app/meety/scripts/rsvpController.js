angular
  .module('meety')
  .controller('rsvpController', function($scope, supersonic, meetingService) {

    //Readability constants
    const buttonStatusEnum = {
      UNCONFIRMED: 0,
      ACCEPTED: 1,
      REJECTED: 2
    };

    $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;

   $scope.meetingSpecs = meetingService.find(steroids.view.params.id);

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
