(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController',MsgC);

    MsgC.$inject = ['$scope','$filter'];
    function MsgC($scope,$filter){
        $scope.name = "Krushna";
        $scope.state = "flower";
        $scope.cost = 0.45; 

        $scope.sayM = function(){
            var msg = $filter('uppercase');
            var output = msg("i like sunrise not flower");
            return output;
        };

        $scope.ImageChange = function(){
            $scope.state = "sun";
        };
    };
})();