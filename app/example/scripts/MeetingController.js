angular
  .module('example')
  .controller('MeetingController', function($scope, supersonic) {
    $scope.meetings = [{purpose: "Website Breakdown", time: "5 pm", location: "Room 1", href: "rsvp.html"},
                       {purpose: "Genaral Meeting", time: "7 pm", location: "Room 2", href: "rsvp.html"},
                       {purpose: "Tech Meeting", time: "8 pm", location: "Room 3", href: "rsvp.html"}];
  });
