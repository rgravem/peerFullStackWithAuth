myApp.controller("viewController", ['$scope', '$http', function($scope, $http){
  console.log("on the View Page");
  $scope.viewShelfItems = function() {
    $http({
      url: '/shelf',
      type: 'GET'
    }).then(function(response) {
        console.log('get view shelf objects success:', response);
    }, function(err) {
      console.log('error in get view shelf objects:', err);
    }); // end then function
  };
}]);
