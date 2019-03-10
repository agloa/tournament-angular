'use strict';

// Register a service factory, which will be called to return the service instance
angular.module('core.individual').factory('Individual',  // name of the instance
    ['$resource', // name of the The injectable $getFn
    function($resource) { // The injectable $getFn
      // call $resource service, provided by the ngResource module
      return $resource('people/people.json'); // A parameterized URL template with parameters prefixed by :
    }
  ]);