 var app = angular.module("simpleApp",[]);
app.controller("simpleController",function($scope)
{
 $scope.collection=[{name:'mahesh'},{name:'mahesh'}, {name:'mahesh'},{name:'mahesh'},{name:'mahesh'}, {name:'mahesh'}];
 $scope.addEntry=function()
 {
     $scope.collection.push({name:$scope.newData}); 
     $scope.newData='';
 };
});