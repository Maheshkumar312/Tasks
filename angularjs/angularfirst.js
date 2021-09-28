var app = angular.module("simpleApp",[]);
app.controller("mathController",function($scope)
{
 // $scope.value=8
 $scope.data={value:21 }

  $scope.square=function(value){
    return value*value;
  }
});