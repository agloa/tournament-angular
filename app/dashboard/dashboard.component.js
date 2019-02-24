angular.module('tournament.dashboard').component('dashboard', {
  templateUrl: 'dashboard/dashboard.template.html',
  controller: ['$routeParams', 'User',
    // TODO: E2E test
    // An end-to-end test (E2E) focuses on testing a full stack, 
    // including some combination of CRM, CMS, web-server, file-system, database, and web-browser. 
    // These tests are the most representative of real-world usage, 
    // because they tie together so many components. 
    // However, this high coupling also makes them brittle 
    // (because a design-change or fault in any part of the system can disrupt the expected flow). 
    // This type of testing is ideal for screens, pageflows, 
    // and integrations which have innately high coupling.
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