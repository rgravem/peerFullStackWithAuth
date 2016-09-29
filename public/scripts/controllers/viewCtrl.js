myApp.controller("viewController", ['$scope', '$http', function($scope, $http){
  console.log("on the View Page");

    $scope.allItems=[];
    var shelfItems = function() {
      $http({
        url: '/shelf',
        type: 'GET'
      }).then(function(response) {
          console.log('get view shelf objects success:', response.data);
          $scope.allItems = response.data;
          console.log($scope.allItems);
      }, function(err) {
        console.log('error in get view shelf objects:', err);
      }); // end then function
    };
    shelfItems();

}]);
