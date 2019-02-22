'use strict';

describe('User', function() {
  var $httpBackend;
  var User;
  var userData = [
    {id:1003, last: 'AGLOA', first:'Admin'},
    {id:43, last: 'Fry', first:'Heather'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('core.user'));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    
  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _User_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('users/users.json').respond(userData);

    User = _User_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch user data', function() {
    var users = User.query();

    expect(users).toEqual([]);

    $httpBackend.flush();
    expect(users).toEqual(userData);
  });

});