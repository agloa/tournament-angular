//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      // 'lib/angular-animate/angular-animate.js',
      'lib/angular-resource/angular-resource.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/user/user.module.js',
      'core/user/user.service.js',
      'core/user/user.service.spec.js',
      'core/individual/individual.module.js',
      'core/individual/individual.service.js',
      'core/individual/individual.service.spec.js',
      'dashboard/dashboard.module.js',
      'dashboard/dashboard.component.js',
      'dashboard/dashboard.component.spec.js',
      'person/person.module.js',
      'person/person.component.js',
      'person/person.component.spec.js',

      // 'phone/phone.module.js',
      // 'phone/phone.component.js',
      // 'phone/phone.component.spec.js'
      // '**/*.module.js',
      // '**/*.component.js',
      // '*!(.module|.spec).js',
      // '!(lib)/**/*!(.module|.spec).js',
      // '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    // browsers: ['Chrome', 'Firefox'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ]
  });
};