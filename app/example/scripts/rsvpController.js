angular
  .module('example')
  .controller('rsvpController', function($scope, supersonic) {

    $scope.navbarTitle = "Learn More";

    $scope.meetingSpecs = {hour: "5",minutes: "30",ampm: "PM",length: "tree fitty",location: "here",purpose: "urgent things"};

    $scope.somedummy = [{name: "Yoahne",attend: true},{name: "gergap",attend: false}];

    $scope.acceptMeeting = function(){
      supersonic.logger.debug("Accept meeting!");
    };

    $scope.rejectMeeting = function(){
      supersonic.logger.debug("Reject meeting!");
    };

  });
