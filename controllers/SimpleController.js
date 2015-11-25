angular.module("nolta").controller("SimpleController", [
  '$scope',
  '$location',
  '$rootScope',
  '$routeParams',
  '$http',
function($scope, $location, $rootScope, $routeParams, $http) {
  $scope.customers = [
    { name: 'John Smith', city: 'Phoenix' },
    { name: 'John Doe', city: 'Los Angeles' },
    { name: 'Freyr Fridfinns', city: 'Husavik' },
    { name: 'Frooze', city: 'Undercity' },
    { name: 'Kjelmhund', city: 'Orgrimmar' }
  ];
}]);
