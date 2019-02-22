'use strict';

var appModule = angular.module('tournament.person');

appModule.component('person', {
  templateUrl: 'person/person.template.html',
  controller: ['$routeParams', 'Individual',
    function PersonController($routeParams,  Individual) {
      var self = this;
      
      self.personId = 1;
      
      if ($routeParams.personId !== undefined) {
        self.personId = $routeParams.personId;
      }

      // User service returns additional data for userId
      self.person = Individual.get({personId:self.personId});

      self.save = function save() {alert('Saving...');}
    }
  ]
});