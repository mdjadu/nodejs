// immediately invoke function (no local variable blead in global scope) 
(function (){
'use strict';

// var x = "hello";

// 1st attribute is name second is dependancy as a array
angular.module('myFirstApp', []) 

.controller('myFirstController',function($scope){
    $scope.name = "Krushna";
    $scope.sayHello = function(){
        return "Hello everyone";
    };
});

})(); 