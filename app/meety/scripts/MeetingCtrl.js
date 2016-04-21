angular
  .module('meety')
  .controller('MeetingCtrl', function($scope, supersonic, Meeting) {

    $scope.enableEdit = false;
    $scope.meetings = Meeting.all();
    $scope.editMeeting = function(){
        $scope.enableEdit = !$scope.enableEdit;
    };
    $scope.removeMeeting = function(index) {
        $scope.meetings.splice(index, 1);
    };

    $scope.editPermission = function(id) {
        // return id == user.id
        return true;
    };
  });
