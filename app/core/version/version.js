'use strict';

angular.module('tournament.version', [
  'tournament.version.interpolate-filter',
  'tournament.version.version-directive'
])

.value('version', '0.1');
