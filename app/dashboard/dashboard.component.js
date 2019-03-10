angular.module('tournament.dashboard').component('dashboard', {
  templateUrl: 'dashboard/dashboard.template.html',
  controller: ['$routeParams', 'User',
    function DashboardController($routeParams, User) {
      var self = this;
      self.includePersonForm = false;
      self.personArrowClass = "arrowRight";
      var userId = 1003;
      
      if ($routeParams.userId !== undefined) {
        userId = $routeParams.userId;
      }

      // User service returns additional data for userId
      self.user = User.get({userId:userId});

      self.togglePerson = function togglePerson() {
        this.includePersonForm = !this.includePersonForm;
        if (this.includePersonForm) {
          this.personArrowClass = "arrowDown";
        } else {
          this.personArrowClass = "arrowRight";
        }
      }
    }
  ]
});