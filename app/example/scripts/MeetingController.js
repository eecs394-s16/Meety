angular
  .module('example')
  .controller('MeetingController', function($scope, supersonic, $firebaseArray) {
    var ref = new Firebase("https://glaring-fire-5657.firebaseio.com/meetings");
    $scope.meetings = $firebaseArray(ref);
  });
