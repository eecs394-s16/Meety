angular
  .module('meety')
  .controller('UserCtrl', function($scope, supersonic) {
  	$scope.toggledView = "login";
  	$scope.switchView = function(view) {
  		$scope.toggledView = view;
  		supersonic.logger.debug(view);
  	};
  });