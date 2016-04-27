angular
  .module('meety')
  .factory('User', function($firebaseObject) {
    
    var url = 'https://glaring-fire-5657.firebaseio.com/users';
    var currentRef = null;

    var ref = function() {
      if (currentRef == null) {
        currentRef = new Firebase(url);        
      }
      return currentRef;
    }

    return {
      // find the name of the user based on user id (email)
      find: function(uid) {
        var userRef = ref().child(uid);
        return $firebaseObject(userRef);
      },
      add: function(uid, name) {
        var userRef = ref().child(uid);
        return userRef.set({name: name});
      }
    };
  });