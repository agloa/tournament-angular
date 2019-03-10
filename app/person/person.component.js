'use strict';

var appModule = angular.module('tournament.person');

appModule.component('person', {
  templateUrl: 'person/person.template.html',
  controller: ['$routeParams', 'Individual',
    function PersonController($routeParams,  Individual) {
      var self = this;
      
      //self.personId = 2;
      
      if ($routeParams.personId !== undefined) {
        self.personId = $routeParams.personId;
      }

      // Individual service returns additional data for personId
      self.people = Individual.get({}, function(person) {
        self.setSelection(self.personId);
      });

      self.setSelection = function setSelection(personId) {
        if (self.people != null){
          self.prefixes = self.people.prefixes;
          self.suffixes = self.people.suffixes;
          self.genders = self.people.genders;
          if (personId != null){
            var person = self.people.contacts[personId];
            if (person != null){
              self.prefix_id = person.prefix_id;
              self.first_name = person.first_name;
              self.last_name = person.last_name;
              self.first_name = person.first_name;
              self.middle_name = person.middle_name;
              self.suffix_id = person.suffix_id;
              self.birth_date = person.birth_date;
              self.gender_id = person.gender_id;
            }
          }
        }
      };

      self.save = function save() {alert('Saving...');}
    }
  ]
});