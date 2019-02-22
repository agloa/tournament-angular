'use strict';

describe('Individual', function() {
  var $httpBackend;
  var Individual;
  var peopleData = [
    {id:1003, last: 'AGLOA', first:'Admin'},
    {id:43, last: 'Fry', first:'Heather'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('core.individual'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    
  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Individual_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('people/people.json').respond(peopleData);

    Individual = _Individual_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the people data from `/people/people.json`', function() {
    var people = Individual.query();

    expect(people).toEqual([]);

    $httpBackend.flush();
    expect(people).toEqual(peopleData);
  });

});