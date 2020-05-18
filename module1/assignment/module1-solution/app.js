(function(){
       'use strict';
       angular.module('ass1',[])

       .controller('disp',['$scope',fundisp]);
       function fundisp($scope){
              $scope.name = "";
              $scope.valuefun = function(){
                     var items = $scope.name.split(",");
                     var s = items.length;
                     console.log(items);
                     var v = ""
                     if (s == 1 && $scope.name == "") {
                            v = "Please enter data first";
                     } else if (s > 3) {
                            v = "Too much!";
                     }
                     else if (s < 4 && $scope.name != "") {
                            v = "Enjoy!";
                     }
                     $scope.value = v;
              };
       }
})();