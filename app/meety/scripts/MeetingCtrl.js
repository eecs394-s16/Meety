angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting, $timeout) {
    $scope.meetings = [];

    $timeout(function() {
      $scope.meetings = Meeting.all();
    }, 100);
  });
