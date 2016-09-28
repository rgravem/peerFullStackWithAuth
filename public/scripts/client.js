console.log('js');

var myApp = angular.module('myApp', []);
var lock = Auth0Lock( 'iIbNnZ1R4Sh6OMUwLSXk2KPF4vAABw0q', 'rgravem.auth0.com' );
var logOutUrl = 'https://rgravem.auth0.com/v2/logout';

myApp.controller('authController', ['$scope', '$http', function($scope, $http){
  console.log('NG');

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

myApp.controller('addController', ['$scope', '$http', function($scope, $http) {
  console.log('in addController');




}]);
var emptyLocalStorage = function(){
  localStorage.removeItem('userProfile');
  localStorage.removeItem( 'userToken' );
};
