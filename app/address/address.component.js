'use strict';

var appModule = angular.module('tournament.address');

appModule.component('address', {
  templateUrl: 'address/address.template.html',
  controller: ['$routeParams', '$http',
    function addressController($routeParams, $http) {
      self = this;

      self.addressId = "1";
      if ($routeParams.addressId !== undefined) self.addressId = $routeParams.addressId;

      $http.get('address/addresses.json').then(function(response) {
        self.addresses = response.data.addresses;
        self.selectedAddress = self.addresses[self.addressId];
        
        self.countries = response.data.countries;
        self.regions = response.data.regions;
      });

      self.save = function save() {alert('Saving...');}

    }
  ]
});