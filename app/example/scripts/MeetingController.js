angular
  .module('example')
  .controller('MeetingController', function($scope, supersonic) {
    $scope.testLoad = "LOADED";

    $scope.meetings = [{purpose: "Website Breakdown", time: "5 pm", location: "Room 1"},
                       {purpose: "Genaral Meeting", time: "7 pm", location: "Room 2"},
                       {purpose: "Tech Meeting", time: "8 pm", location: "Room 3"}];

    supersonic.logger.debug($scope.meetings);

    $scope.navbarTitle = "Learn More";

  });
