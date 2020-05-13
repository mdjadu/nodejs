(function(){
    'use strict';
    angular.module('NameCal',[])
    .controller('output',function($scope){
        $scope.name = "";
        $scope.value = 0;

        $scope.display = function() {
            var tvalue = 0;
            tvalue = calculate($scope.name)
            $scope.value = tvalue
        };

        function calculate (string){
            var tsvalue = 0;
            for(var i=0; i<string.length; i++){
                tsvalue += string.charCodeAt(i);
            }
            return tsvalue;
        }
    });
})();