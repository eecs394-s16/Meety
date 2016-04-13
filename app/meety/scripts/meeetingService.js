angular
  .module('meety')
  .factory('meetingService', function($firebaseObject, $firebaseArray) {
    
    var url = 'https://glaring-fire-5657.firebaseio.com/meetings';
    var currentRef = null;

    var ref = function() {
      if (currentRef == null) {
        currentRef = new Firebase(url);        
      }
      return currentRef;
    }

    return {
      all: function() {
        return $firebaseArray(ref());
      },
      find: function(id) {
        return $firebaseObject(ref().child(id));
      },
      add: function(meeting) {
        ref().push(meeting)
      }
    };
  });