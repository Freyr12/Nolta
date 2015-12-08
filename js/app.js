angular.module('nolta', ['ngRoute']);

angular.module('nolta').config(['$routeProvider',
function ($routeProvider) {
  $routeProvider
    .when('/frontpage', { templateUrl: 'views/frontpage.html', controller: 'SimpleController' })
    .when('/fyrirlestrar', { templateUrl: 'views/fyrirlestrar.html', controller: 'AboutController' })
    .when('/personulegThroun', { templateUrl: 'views/personulegThroun.html', controller: 'AboutController' })
    .when('/lidsheild', { templateUrl: 'views/lidsheild.html', controller: 'AboutController' })
    .when('/stefnumotun', { templateUrl: 'views/stefnumotun.html', controller: 'AboutController' })
    .when('/about', { templateUrl: 'views/about.html', controller: 'AboutController' })
    .otherwise({
      redirectTo: '/frontpage'
    });
}]);
