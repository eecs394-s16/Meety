angular
  .module('meety')
  .controller('UserCtrl', function($scope, supersonic, Auth) {

    // which view is currently being shown
    $scope.toggledView = "login";
    // input vars for registering and logging in
    $scope.registerInputs = {};
    $scope.loginInputs = {};

    // updates var to next view
    $scope.switchView = function(view) {
      $scope.toggledView = view;
    };
    
    // get email and password from form, attempt to login with firebase
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

    // register function
    $scope.register = function(input) {

      // options object for alert message if any errors occur registering
      var options = {
        message: "The following fields are empty:\n",
        buttonLabel: "Close"
      };

      // check empty fields, updating alert message if there are
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

      // if there is an empty field, show the alert and cancel register function
      if (options.message != "The following fields are empty:\n") {
        supersonic.ui.dialog.alert("Error creating user", options).then(function() {
          supersonic.logger.log("Alert closed.");
        });
        return;
      }

      // if the passwords don't match, show alert displaying error and return out of function
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

      // create the user with firebase function using email and pass inputs
      Auth.ref().$createUser({
        email: input.email,
        password: input.pass
      }).then(function(userData) {
        $scope.message2 = "User created with uid: " + userData.uid;
      }).catch(function(error) {
        $scope.error2 = error;
      });
    };    

    // function to log user out
    $scope.logoutUser = function() {
      Auth.ref().$unauth();
    };
    
    $scope.auth = Auth.ref();
    
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
      localStorage.setItem("authData", JSON.stringify(authData));
    });
  });
