'use strict';

describe('tournament.address controller ', function() {

  // Load the module that contains the `dashboard` component before each test
  beforeEach(module('tournament.address'));

  describe('address controller', function(){

    it('should be defined', inject(function($controller) {
      //spec body
      var ctrl = $controller('addressController');
      expect(ctrl).toBeDefined();
    }));

  });
});