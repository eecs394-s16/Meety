angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting, $timeout) {
    $scope.meetings = [];
    $scope.buttonStatus = true;
    $scope.enableEdit = false;

    $scope.getMeetings = function() {
      var authData = JSON.parse(localStorage.getItem("authData"));
      if (authData) {
        $scope.meetings = Meeting.all(authData.uid);
      } else {
        $scope.meetings = [];
      }
    };
    
    $timeout($scope.getMeetings, 100);

    supersonic.ui.views.current.whenVisible( function() {
      $scope.getMeetings();
    });

    $scope.editMeeting = function(){
      $scope.enableEdit = !$scope.enableEdit;
      $scope.buttonStatus = !$scope.buttonStatus;
  };

    $scope.removeMeeting = function(index) {
      $scope.meetings.splice(index, 1);
      $scope.buttonStatus = !$scope.buttonStatus;
    };

    $scope.editPermission = function(id) {
      // return id == user.id
      return true;
    };
  });
