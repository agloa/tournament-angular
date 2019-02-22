'use strict';

angular.
  module('core.user').
  factory('User', ['$resource',
    function($resource) {
      return $resource('users/:userId.json', {}, {
        query: {
          method: 'GET',
          params: {userId: 'users'},
          isArray: true
        }
      });
    }
  ]);