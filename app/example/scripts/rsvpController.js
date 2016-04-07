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

    $scope.meetingSpecs = {hour: "5",minutes: "30",ampm: "PM",length: "tree fitty",location: "here",purpose: "urgent things"};

    $scope.somedummy = [{name: "Yoahne",attend: true},{name: "gergap",attend: false}];

    $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;

    $scope.loadEvent = function() {
      //upon loading event info, change thingies
      $scope.buttonStatus = buttonStatusEnum.UNCONFIRMED;  //pull from data
    }

    $scope.acceptMeeting = function(){
      supersonic.logger.debug("Accept meeting!");
      $scope.buttonStatus = buttonStatusEnum.ACCEPTED;
    };

    $scope.rejectMeeting = function(){
      supersonic.logger.debug("Reject meeting!");
      $scope.buttonStatus = buttonStatusEnum.REJECTED;
    };
  });
