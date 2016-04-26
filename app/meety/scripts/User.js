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
      find: function(uid) {
        var query = ref().orderByChild('uid').equalTo(uid).limitToFirst();
        return $firebaseObject(query);
      },
      add: function(uid, name) {
        return ref().push({uid: uid, name: name});
      }
    };
  });