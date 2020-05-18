(function(){
    'use strict';

    angular.module('MsgApp',[])
    .controller('MsgController',MsgC);

    MsgC.$inject = ['$scope','$inject'];
    function MsgC($scope,$inject){
        $scope.name = "Krushna";
        $scope.state = "flower";

        $scope.sayM = function(){
            var msg = "i like sunrise not flower";
            var output = $filter('uppercase')(msg);
            return output;
        };
    };
})();