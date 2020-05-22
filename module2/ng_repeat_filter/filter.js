var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

// var filterValue = numberArray.filter(function(value){
//     return value > 5;
// });

function abovesomething(value){
    return value > 5;
}
var filterValue = numberArray.filter(abovesomething);
console.log("Filter Number array : ",filterValue);

var shoppingList = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log("shopping list ",shoppingList);

var searchValue = "Bismol";
function containsFilter (value){
    return value.indexOf(searchValue) != -1;
}

var searchShoppingList = shoppingList.filter(containsFilter);
console.log("Filtered output ",searchShoppingList);