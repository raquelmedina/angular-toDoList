
var app = angular.module('myList', []);
app.controller('MyController', function($scope){
    $scope.toDoList = [
        {area: 'room', activity:'make bed'} ,
        {area:'kitchen',activity:'wash dishes'},
        {area:'patio',  activity:'water plants'},
        {area:'basement', activity:'dry clothes'},
        {area:'store' , activity:'buy milk'}
    ];
   
    $scope.submit=function(){
        $scope.toDoList.push({area: $scope.area, activity: $scope.activity});
    }
});
