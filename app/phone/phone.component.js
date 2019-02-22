'use strict';

var appModule = angular.module('tournament.phone');

appModule.component('phone', {
  templateUrl: 'phone/phone.template.html',
  controller: ['$routeParams', '$http',
    function phoneController($routeParams, $http) {
      self = this;

      self.phoneId = "1";
      if ($routeParams.phoneId !== undefined) self.phoneId = $routeParams.phoneId;

      $http.get('phone/phones.json').then(function(response) {
        self.phones = response.data.phones;
        self.selectedPhone = self.phones[self.phoneId];
      });

    }
  ]
});