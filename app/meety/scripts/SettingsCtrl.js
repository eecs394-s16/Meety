angular
  .module('meety')
  .controller('SettingsCtrl', function($scope, supersonic, Auth) {
    $scope.logoutUser = function() {

      var options = {
        buttonLabels: ["Cancel","Yes"]
      };
      // send confirmation alert when user tries to delete meeting
      supersonic.ui.dialog.confirm("Are you sure you want to logout?", options).then(function(index) {
        if (index == 1) {
          Auth.ref().$unauth();
          supersonic.ui.initialView.show();
        }
      });
    };
  });
