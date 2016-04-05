angular
  .module('example')
  .controller('SendingFormController', function($scope, supersonic) {

    $scope.navbarTitle = "Learn More";
    this.hello = "some other string";
    this.submit = function (){
      //on click or on submit function
      supersonic.logger.debug("Submitted form");
    };
  });
