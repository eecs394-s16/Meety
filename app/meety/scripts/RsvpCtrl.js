angular
  .module('meety')
  .controller('RsvpCtrl', function($scope, supersonic, Meeting) {

    //Readability constants
    const buttonStatusEnum = {
      UNCONFIRMED: 0,
      ACCEPTED: 1,
      REJECTED: 2
    };

    $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;

    Meeting.find(steroids.view.params.id).$bindTo($scope, 'meetingSpecs');   

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
