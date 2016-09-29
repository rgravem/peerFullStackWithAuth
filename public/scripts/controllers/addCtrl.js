myApp.controller("addController", ['$scope','$http', function($scope, $http){
  console.log("on the Add Page");

  $scope.addItem = function() {
    var newItem = {
      description: $scope.description,
      placer: $scope.placer,
      image: $scope.image
    };
    console.log('newItem');
    $http({
      method: 'POST',
      url: '/addToShelf',
      data: newItem
    }).then(function (response){
          console.log('http post success:', response);
        }, function (error) {
          console.log('error in post;', error);
        }); // end then function
  }; // end addItem function

//run controller load
  $scope.init = function(){
    console.log('in init');
    // check if a user's info is saved in localStorage
    if( JSON.parse( localStorage.getItem( 'userProfile' ) ) ){
      // if so, save userProfile as $scope.userProfile
      $scope.userProfile = JSON.parse( localStorage.getItem( 'userProfile' ) );
      console.log( 'loggedIn:', $scope.userProfile );
      $scope.showUser = true;
    }
    else{
      // if not, make sure we are logged out and empty
      emptyLocalStorage();
      $scope.showUser = false;
    }
  }; // end init function

  $scope.logIn = function(){
    console.log('in logIn');
    lock.show( function( err, profile, token ){
      if(err){
        console.log('err:', err);
      }else{
        localStorage.setItem( 'userToken', token );
        console.log( 'token:', token );
        localStorage.setItem( 'userProfile', JSON.stringify( profile ) );
        console.log('Auth0 success, Profile:', profile);
        location.reload();
      }
    });
  }; // end logIn
  $scope.logOut = function(){
    // call out logOutUrl
    $http({
      method: 'GET',
      url: logOutUrl,
    }).then( function(data){
      // if logged out OK
      if(data.data == 'OK'){
        // empty localStorage
        emptyLocalStorage();
        $scope.showUser = false;
      }
    });
  }; // end logout
  $scope.init();
}]);

var emptyLocalStorage = function(){
localStorage.removeItem('userProfile');
localStorage.removeItem( 'userToken' );
};
