'use strict';

var appModule = angular.module('tournament.person');

appModule.component('person', {
  templateUrl: 'person/person.template.html',
  bindings: {id: '<'},
  controller: ['$routeParams', 'Individual',
    function PersonController($routeParams,  Individual) {
      var self = this;
            
      if ($routeParams.personId !== undefined) id = $routeParams.personId;

      // Individual service returns data for personId
      self.people = Individual.get({}, function() {self.setSelection(id);});

      self.setSelection = function setSelection(id) {
        if (self.people != null && id != null) {
            self.selectedPerson = self.people.contacts[id];
        }
      };

      self.save = function save() {alert('Saving...');}
    }
  ]
});