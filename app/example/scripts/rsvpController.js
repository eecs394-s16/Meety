angular
  .module('example')
  .controller('rsvpController', function($scope, supersonic) {
  	$scope.master = {};

    $scope.navbarTitle = "Learn More";

    $scope.meetingSpecs = {hour: "5",minutes: "30",ampm: "PM",length: "tree fitty",location: "here",purpose: "urgent things"};

    $scope.somedummy = [{name: "Yoahne",attend: true},{name: "gergap",attend: false}];

  });
