angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting) {
    $scope.meetings = Meeting.all();
  });
