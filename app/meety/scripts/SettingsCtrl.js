angular
  .module('meety')
  .controller('SettingsCtrl', function($scope, supersonic, Auth) {
    $scope.logoutUser = function() {
      Auth.ref().$unauth();
      supersonic.ui.initialView.show();
    };
  });
