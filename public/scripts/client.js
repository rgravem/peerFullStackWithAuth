console.log('js');

var myApp = angular.module('myApp', ["ngRoute"]);

//config routes
myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/home",{
      templateUrl:"/views/partials/home.html",
      controller: "homeController"
    }).
    when("/add",{
      templateUrl:"/views/partials/add.html",
      controller: "addController"
    }).
    when("/view",{
      templateUrl:"/views/partials/view.html",
      controller: "viewController"
    }).
    otherwise({
      redirectTo: "/home"
    });
}]); //end route config
