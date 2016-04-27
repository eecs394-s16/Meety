angular
  .module('meety')
  .controller('RequestCtrl', function($scope, supersonic, Meeting) {

    // object that holds meeting data, attendees initialized with dummy
    $scope.master = {attendees: [{name: "Gergap", attend: true}]};

    // initialize start, end time vars, date var
    $scope.startTime = null;
    $scope.endTime = null;
    $scope.theDate = null;

    // meeting submission function
    $scope.requestMeeting = function (){

      // check to see if user is logged in, if not, return out of function
      var authData = JSON.parse(localStorage.getItem("authData"));
      if(!authData) {
        supersonic.logger.debug("not logged in?");
        return;
      }

      // options object for failed submission alert
      var options = {
        message: "The following fields are empty:\n",
        buttonLabel: "Close"
      };

      // check for empty fields, add field to alert message
      if (!$scope.theDate) {
        supersonic.logger.debug("Empty Date field");
        options.message += "Date\n";
      }
      if (!$scope.startTime) {
        supersonic.logger.debug("Empty startTime field");
        options.message += "Start Time\n";
      }
      if (!$scope.endTime) {
        supersonic.logger.debug("Empty endTime field");
        options.message += "End Time\n";
      }
      if (!$scope.master.loc) {
        supersonic.logger.debug("Empty location field");
        options.message += "Location\n";
      }
      if (!$scope.master.purpose) {
        supersonic.logger.debug("Empty purpose field");
        options.message += "Purpose\n";
      }
      // check to see if alert message has been altered, if it has, cancel the request
      // and inform user of the problem
      if (options.message != "The following fields are empty:\n")
      {
        supersonic.ui.dialog.alert("Error creating meeting", options).then(function() {
        supersonic.logger.log("Alert closed.");
        });
        return;
      }

      // convert the date and time objects to JSON objects
      $scope.master.startTime = $scope.startTime.toJSON();
      $scope.master.endTime = $scope.endTime.toJSON();
      $scope.master.theDate = $scope.theDate.toJSON();
      $scope.master.uid = authData.uid;

      // add team eamils to database
      $scope.teamEmails = JSON.parse(localStorage.getItem("team"));

      // add your to team eamils
      $scope.master.teamEmails = {};

      $scope.master.teamEmails[authData.password.email.replace('@', '').replace(/\./g, '')] =  authData.password.email;


      if (!$scope.teamEmails) {
      } else {
        for(var i = 0; i < $scope.teamEmails.length; i++) {
          $scope.master.teamEmails[$scope.teamEmails[i].replace('@', '').replace(/\./g, '')] = $scope.teamEmails[i];
        }
      }

      // debugging message
      supersonic.logger.debug($scope.master);

      // add the meeting object to firebase meetings list
      // then navigate user to that meeting's page
      Meeting.add($scope.master).then(function(ref) {
        var rsvpView = new supersonic.ui.View('meety#rsvp');
        supersonic.ui.layers.push(rsvpView, { params: { id: ref.key() } });
      });

      // call reset function
      $scope.resetMaster();
    };

    // reset appropriate master fields to display a blank form
    $scope.resetMaster = function() {
      $scope.master.loc = "";
      $scope.master.purpose = "";
      $scope.master.startTime = null;
      $scope.master.endTime = null;
      $scope.startTime = null;
      $scope.endTime = null;
    };
  });
