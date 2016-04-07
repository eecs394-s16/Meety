angular
  .module('example')
  .controller('rsvpController', function($scope, supersonic) {
    //Readability constants
    const buttonStatusEnum = {
      UNCONFIRMED: 0,
      ACCEPTED: 1,
      REJECTED: 2
    }

    $scope.navbarTitle = "Learn More";

    $scope.meetingSpecs = {hour: "5",minutes: "30",ampm: "PM",length: "tree fitty",location: "here",purpose: "urgent things",attendees: [{name: "Yoahne",attend: true},{name: "gergap",attend: false}]};

    $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;

    $scope.name = "";

    $scope.test = "stuff"

    $scope.addName = function(newName) {
      if (newName) {
        $scope.name = newName;
      }
    };


    $scope.loadEvent = function() {
      //upon loading event info, change thingies
      $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;  //pull from data
    }

    $scope.acceptMeeting = function(){
      supersonic.logger.debug("Accept meeting!");
      if ($scope.name) {
        $scope.meetingSpecs.attendees.push({ name: $scope.name,attend: true });
      }
      $scope.buttonStatus = buttonStatusEnum.ACCEPTED;
    };

    $scope.rejectMeeting = function(){
      supersonic.logger.debug("Reject meeting!");
      if ($scope.name) {
        $scope.meetingSpecs.attendees.push({ name: $scope.name,attend: false });

      }
      $scope.buttonStatus = buttonStatusEnum.REJECTED;
    };
  });
