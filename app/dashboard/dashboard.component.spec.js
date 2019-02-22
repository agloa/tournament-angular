'use strict';

describe('tournament.dashboard controller', function() {

  // Load the module that contains the component before each test
  beforeEach(module('tournament.dashboard'));

  describe('Dashboard Controller', function(){
    var $httpBackend, ctrl;
    var userData = {
      "id": 1003, 
      "displayName": "Admin AGLOA",
      "lastUpdatedDate": "01/01/1992"
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users/1003.json').respond(userData);

      $routeParams.userId = '1003';

      ctrl = $componentController('dashboard');
    }));

    it('should fetch the user details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.user).toEqual({});

      $httpBackend.flush();
      expect(ctrl.user).toEqual(userData);
    });

  });
});
