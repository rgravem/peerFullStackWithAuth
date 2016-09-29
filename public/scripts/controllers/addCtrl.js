myApp.controller("addController", ['$scope','$http', function($scope, $http){
  console.log("on the Add Page");
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
