angular
  .module('example')
  .controller('MeetingController', function($scope, supersonic, meetingService) {
    $scope.meetings = meetingService.all();
  });
