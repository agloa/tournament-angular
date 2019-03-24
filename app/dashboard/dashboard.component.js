angular.module('tournament.dashboard').component('dashboard', {
  templateUrl: 'dashboard/dashboard.template.html',
  bindings: {data: '<'},
  controller: ['$routeParams', 'User',
    function DashboardController($routeParams, User) {
      var self = this;
      self.personArrowClass = "arrowRight";
      self.userId = 1003; // TODO: logged in user service
      
      if ($routeParams.userId !== undefined) self.userId = $routeParams.userId;

      self.includePersonForm = (self.userId !== undefined);

      // User service returns additional data for userId
      self.user = User.get({userId:self.userId});

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