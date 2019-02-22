'use strict';

angular.
  module('core.individual').
  factory('Individual', ['$resource',
    function($resource) {
      return $resource('people/:personId.json', {}, {
        query: {
          method: 'GET',
          params: {personId: 'people'},
          isArray: true
        }
      });
    }
  ]);