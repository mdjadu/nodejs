(function(){
    'use strict';

    angular.module('DC',[])
    .controller('DCcontroller',funDC);

    funDC.$inject = ['$scope'];

    function funDC($scope){
        $scope.name = "Krushna";
        $scope.onceCounter = 0;
        $scope.counter = 0;
        
        $scope.clickFun = function(){
            console.log("# of watchers",$scope.$$watchersCount);
        };
        
        $scope.countOnce = function(){
            $scope.onceCounter = 1;
        };

        $scope.upcounter = function(){
            $scope.counter++;
        };

        // $scope.$watch('onceCounter',function(newValue,oldValue){
        //     console.log("old value",oldValue);
        //     console.log("new value",newValue);
        // });

        // $scope.$watch('counter',function(newValue,oldValue){
        //     console.log("oldvalue",oldValue);
        //     console.log("newvalue",newValue);
        // });

        // angular keeps it own watchers for us no need to manually define them
        $scope.$watch(function(){
            console.log("Digest loop Fired !");
        })
    }
})();