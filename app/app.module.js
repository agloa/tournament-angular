'use strict';

// Declare app level module which depends on views, and core components
angular.module('tournament', [
  'ngRoute',
  'core',
  'tournament.dashboard', // view
  'tournament.person', // view
  'tournament.address', // view
  'tournament.phone', // view
  'tournament.version' // view
]);
