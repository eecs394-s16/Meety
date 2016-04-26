angular
  .module('meety')
  .factory('Meeting', function($firebaseObject, $firebaseArray) {
    
    var url = 'https://glaring-fire-5657.firebaseio.com/meetings';
    var currentRef = null;

    var ref = function() {
      if (currentRef == null) {
        currentRef = new Firebase(url);        
      }
      return currentRef;
    }

    return {
      all: function(uid) {
        var query = ref().orderByChild('uid').equalTo(uid);
        return $firebaseArray(query);
      },
      find: function(id) {
        // this doesn't check uid
        return $firebaseObject(ref().child(id));
      },
      add: function(meeting) {
        return ref().push(meeting);
      }
    };
  });