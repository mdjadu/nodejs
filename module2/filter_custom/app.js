(function(){
    'use strict';

    angular.module('Cfilte',[])
    .controller('cusFilter',CuFil)
    .filter('custFilterFunction',CustomFilter)
    .filter('targetReplace',tarReplace);

    CuFil.$inject = ['$scope','custFilterFunctionFilter'];

    function CuFil($scope,custFilterFunctionFilter){
        $scope.name = "Krushna";
        $scope.value = "flower"
        $scope.sayM = function(){
            var msg = "I like sunrise over flower";
            msg = custFilterFunctionFilter(msg);
            return msg;
        };
    };

    function CustomFilter (){
        return function(input){
            input = input || "";
            input = input.replace("like","love");
            return input;
        };
    }
    function tarReplace (){
        return function(input,target,replace){
            input = input || "";
            input = input.replace(target,replace);
            return input;
        };
    }
})();