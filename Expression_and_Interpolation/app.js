(function (){
    'use strict'

    angular.module('expint',[])

    .controller('expintController',fun);

    
    fun.$inject = ['$scope']; // used injection function to protect deom the minification of the code
    function fun($scope) {
        $scope.name = "Krushna";
        $scope.show = "plant2"

        $scope.sayMessage = function(){
            return "Krushna study in IIT";
        };

        $scope.feedkp = function(){
            $scope.show = "sun";
        };
    }
    
})();