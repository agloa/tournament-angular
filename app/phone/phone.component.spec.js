'use strict';

describe('tournament.phone controller ', function() {

  // Load the module that contains the `dashboard` component before each test
  beforeEach(module('tournament.phone'));

  describe('phone controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var ctrl = $controller('phoneController');
      expect(ctrl).toBeDefined();
    }));

  });
});