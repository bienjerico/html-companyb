var app = angular.module('app', []);
app.controller('appController',function($scope,$http) {

  $http.get('shoes-data.json').success(function(response) {
    console.log(response);
    $scope.shoes = response;
  });

  $scope.resetdata = function(){
    $scope.search = {};
  }

});
