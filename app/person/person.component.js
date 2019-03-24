'use strict';

var appModule = angular.module('tournament.person');

appModule.component('person', {
  templateUrl: 'person/person.template.html',
  bindings: {id: '<'},
  controller: ['$routeParams', 'Individual',
    function PersonController($routeParams,  Individual) {
      var self = this;
            
      if ($routeParams.id !== undefined) self.id = $routeParams.id;

      // Individual service returns data for person id
      self.people = Individual.get({id:"id"}, 
        function() {
          self.setSelectedPerson(self.id);
        });

      self.setSelectedPerson = function setSelectedPerson(id) {
        if (self.people != null && id != null) {
            self.selectedPerson = self.people.contacts[id];
            self.selectedPerson.birth_date = new Date(self.selectedPerson.birth_date);
        }
      };

      self.save = function save() {
        alert('Saving...' + JSON.stringify(self.selectedPerson));
      }
    }
  ]
});