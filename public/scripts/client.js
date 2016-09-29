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


myApp.controller('addController', ['$scope', '$http', function($scope, $http) {
  console.log('in addController');
  $scope.addItem = function() {
    var newItem = {
      description: $scope.description,
      placer: $scope.placer,
      image: $scope.image
    };
    $http({
      url: '/shelf',
      type: 'POST',
      data: newItem
    }).then(function (response){
          console.log('http post success:', response);
        }, function (error) {
          console.log('error in post;', error);
        }); // end then function
  }; // end addItem function



}]);
var emptyLocalStorage = function(){
  localStorage.removeItem('userProfile');
  localStorage.removeItem( 'userToken' );
};
