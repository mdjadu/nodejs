(function(){
    'use strict';

    angular.module('depinj',[])

    .controller('depinjcon',['$scope','$filter',depinjc]);

    function depinjc ($scope,$filter) { // filter is use to format the data  
        $scope.name = "Krushna";

        $scope.upper = function() {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }
})();