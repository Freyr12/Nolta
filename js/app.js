angular.module('nolta', ['ngRoute'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/frontpage', { templateUrl: 'views/frontpage.html', controller: 'SimpleController' })
    .when('/fyrirlestrar', { templateUrl: 'views/fyrirlestrar.html', controller: 'AboutController' })
    .when('/leidtogahaefni', { templateUrl: 'views/leidtogahaefni.html', controller: 'AboutController' })
    .when('/starfsferilsthroun', { templateUrl: 'views/starfsferilsthroun.html', controller: 'AboutController' })
    .when('/garuda', { templateUrl: 'views/garuda.html', controller: 'AboutController' })
    .when('/teamNavigation', { templateUrl: 'views/teamNavigation.html', controller: 'AboutController' })
    .when('/organizationalNavigation', { templateUrl: 'views/organizationalNavigation.html', controller: 'AboutController' })
    .when('/lidsheild', { templateUrl: 'views/lidsheild.html', controller: 'AboutController' })
    .when('/stefnumotun', { templateUrl: 'views/stefnumotun.html', controller: 'AboutController' })
    .when('/about', { templateUrl: 'views/about.html', controller: 'AboutController' })
    .otherwise({
      redirectTo: '/frontpage'
    });
    // Uncomment this when removing the /#/ in the path. Needs some server rewriting
    // Also add $locationProvider as a function parameter
    // $locationProvider.html5Mode(true);
});
