(function(){
    'use strict';

    var shoppinglist1 = ["A","B","C","D","E","F","G","H"];
    var shoppinglist2 = [
        {
            name: "A",
            quantity: "2"
        },
        {
            name: "C",
            quantity: "7"
        },
        {
            name: "F",
            quantity: "10"
        },
        {
            name: "D",
            quantity: "17"
        }
    ];

    angular.module('ShoppingList',[])
    .controller('SLController',SLFunction);
    
    SLFunction.$inject = ['$scope'];

    function SLFunction ($scope){
        $scope.shoppinglist1 = shoppinglist1;
        $scope.shoppinglist2 = shoppinglist2;

        $scope.AddToList = function(){
            var newItem = {
                name: $scope.NewItemName,
                quantity: $scope.NewItemQuantity
            };

            $scope.shoppinglist2.push(newItem);
        };
    }
})();