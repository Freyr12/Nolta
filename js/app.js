angular.module('nolta', ['ngRoute']);

angular.module('nolta').config(['$routeProvider',
function ($routeProvider) {
  $routeProvider
    .when('/frontpage', { templateUrl: 'views/frontpage.html', controller: 'SimpleController' })
    .when('/about', { templateUrl: 'views/about.html', controller: 'AboutController' })
    .otherwise({
      redirectTo: '/frontpage'
    });
}]);
