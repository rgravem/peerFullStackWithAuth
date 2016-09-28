console.log('js');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when("/home", {
        templateUrl: "views/partials/home.html",
        controller: "homeController"
      }).
      when("/addView", {
        templateUrl: "views/partials/addView.html",
        controller: "addController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
