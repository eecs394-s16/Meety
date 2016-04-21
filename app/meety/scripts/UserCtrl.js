angular
  .module('meety')
  .controller('UserCtrl', function($scope, supersonic, Auth) {
    $scope.toggledView = "login";
    $scope.registerInputs = {};
    $scope.loginInputs = {};

    $scope.switchView = function(view) {
      $scope.toggledView = view;
    };
    
    $scope.login = function(input) {
      Auth.ref().$authWithPassword({
        email: input.email,
        password: input.pass
      }).then(function(userData) {
        $scope.message = "User authenticated with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error = error;
      });
    };

    $scope.register = function(input) {
      var options = {
        message: "The following fields are empty:\n",
        buttonLabel: "Close"
      };

      if (!input.name) {
        options.message += "Name\n";
      }

      if (!input.email) {
        options.message += "Email\n";
      }

      if (!input.pass) {
        options.message += "Password\n";
      }

      if (!input.passConfirm) {
        options.message += "Password Confirmation\n";
      }

      if (options.message != "The following fields are empty:\n") {
        supersonic.ui.dialog.alert("Error creating user", options).then(function() {
          supersonic.logger.log("Alert closed.");
        });
        return;
      }

      if (input.pass != input.passConfirm) {
        var options = {
          message: "Passwords don't match",
          buttonLabel: "Close"
        };

        supersonic.ui.dialog.alert("Error creating user", options).then(function() {
          supersonic.logger.log("Alert closed.");
        });
        return;
      }

      Auth.ref().$createUser({
        email: input.email,
        password: input.pass
      }).then(function(userData) {
        $scope.message2 = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error2 = error;
      });
    };    

    $scope.logoutUser = function() {
      Auth.ref().$unauth();
    };
    
    $scope.auth = Auth.ref();
    
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      localStorage.setItem("authData", JSON.stringify(authData));
    });
  });
