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
      var authData = JSON.parse(localStorage.getItem('authData'));

      if (authData) {
        supersonic.logger.debug("Accept meeting!");
        if (newName) {
          $scope.meetingSpecs.attendees.push({ name: newName, attend: true, uid: authData.uid });
          $scope.buttonStatus = buttonStatusEnum.ACCEPTED;
        }
      }
    };

    $scope.rejectMeeting = function(newName){
      var authData = JSON.parse(localStorage.getItem('authData'));

      if (authData) {
        supersonic.logger.debug("Reject meeting!");
        if (newName) {
          $scope.meetingSpecs.attendees.push({ name: newName, attend: false, uid: authData.uid });
          $scope.buttonStatus = buttonStatusEnum.REJECTED;
        }
      }
    };
  });
