'use strict';
describe('tournament.person', function() {

  // Load the module that contains the component before each test
  beforeEach(module('tournament.person'));

  describe('controller', function(){
    var $httpBackend, ctrl;
    var personData = {
      "id": 1, 
      "displayName": "Admin AGLOA",
      "lastUpdatedDate": "01/01/1992"
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('people/'+personData.id+'.json').respond(personData);

      $routeParams.contactId = personData.id;

      ctrl = $componentController('person');
    }));

    it('should fetch person details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.person).toEqual({});

      $httpBackend.flush();
      expect(ctrl.person).toEqual(personData);
    });

  });
});