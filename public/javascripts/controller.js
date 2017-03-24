angular.module('myApp', [])
  .controller('UserCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/userList').then(function(response) {
      $scope.users = response.data;
    })
  }])
  .controller('UserTwoCtrl', ['$scope', function($scope) {
    $scope.users = usersJSON;
  }])
  .controller('UserThreeCtrl', ['$scope', function($scope) {
    //$scope.users = users;
  }]);