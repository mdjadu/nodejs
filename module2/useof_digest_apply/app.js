(function(){
    'use strict';

    angular.module('DC',[])
    .controller('DCcontroller',DCfun);

    DCfun.$inject = ['$scope','$timeout'];

    function DCfun ($scope,$timeout){
        $scope.counter = 0;


        // this is one way (used digest)

        // $scope.clickfun = function(){
        //     setTimeout(function(){
        //         $scope.counter++;
        //         console.log("time out");
        //         $scope.$digest();
        //     },2000);
        //     // $scope.$digest;
        // };

        
        // this is other way and proper way to do it (used applied)
        
        // $scope.clickfun = function(){
        //     setTimeout(function(){
        //         $scope.$apply(function(){
        //             $scope.counter++;
        //             console.log("time out");
        //         });
        //     },2000);
        //     // $scope.$digest;
        // };


        // in build timecounter (using $timeout)

        $scope.clickfun = function(){
            $timeout(function(){
                $scope.counter++;
                console.log("time out");
            },2000);
        };

    }
})();