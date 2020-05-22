(function(){
    'use strict';

    angular.module('binding',[])
    .controller('bindController',bindfun);

    bindfun.$inject = ['$scope'];

    function bindfun($scope){
        // $scope.fullname = "";
        $scope.firstname = "Krushna";

        $scope.watcherfun = function(){
            console.log("# of watchers",$scope.$$watchersCount);
        };

        $scope.setFullname = function(){
            $scope.fullname = $scope.firstname + " " + "Patil";
        };

        $scope.logfirstname = function(){
            console.log("First name is : ",$scope.firstname);
        };
        
        $scope.logfullname = function(){
            console.log("Full name is : ",$scope.fullname);
        };

    }
})();