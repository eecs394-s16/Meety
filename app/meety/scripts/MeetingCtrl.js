angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting, $timeout) {
    $scope.meetings = [];

    $scope.getMeetings = function() {
      var authData = JSON.parse(localStorage.getItem("authData"));
      if (authData) {
        $scope.meetings = Meeting.all();
      } else {
        $scope.meetings = [];
      }
    };
    
    $timeout($scope.getMeetings, 100);

    supersonic.ui.views.current.whenVisible( function() {
      $scope.getMeetings();
    });
  });
