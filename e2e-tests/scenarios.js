'use strict';
/* https://github.com/angular/protractor/blob/master/docs/toc.md */
describe('Tournament app', function() {

  it('should automatically redirect to /dashboard when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toMatch("/dashboard");
  });

  describe('dashboard', function() {

    beforeEach(function() {
      browser.get('index.html#!/dashboard');
    });

    it('should render dashboard when user navigates to /dashboard', function() {
      expect(element.all(by.css('[ng-view] h2')).first().getText()).
        toMatch(/Dashboard/);
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/Welcome, Admin AGLOA. This app will guide you through the steps of tournament registration./);
    });

  });
});
