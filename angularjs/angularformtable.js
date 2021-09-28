 var app = angular.module("simpleApp",[]);
app.controller("simpleController",function($scope)
{
 $scope.collection=[
    {
      
      'first':'mahesh',
      'last':'kumar',
      'handle':'fb'
    },
    {
      'first':'ravi',
      'last':'kumar',
      'handle':'wtsapp'
    },
    {
 
      'first':'sharukh',
      'last':'kumar',
      'handle':'insta'
    },
    {
      
      'first':'pb',
      'last':'kumar',
      'handle':'all'
    },
  ];
 $scope.addEntry=function()
 {
     $scope.collection.push($scope.newData); 
     $scope.newData='';
 };
});