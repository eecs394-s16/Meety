angular
  .module('meety')
  .controller('MeetingController', function($scope, supersonic, meetingService) {
    $scope.meetings = meetingService.all();
  });
