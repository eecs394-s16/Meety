angular
  .module('meety')
  .factory('Auth', function($firebaseAuth) {
    var url = 'https://glaring-fire-5657.firebaseio.com/users';
    var currentRef = null;

    var ref = function() {
      if (currentRef == null) {
        currentRef = new Firebase(url);        
      }
      return currentRef;
    };

    return {
      ref: function() {
        $firebaseAuth(ref());
      }
    };
  });