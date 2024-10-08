// //**prompt
//Highest Profit Wins
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.


//**My solution so far
function minMax(arr){ // fix me!
  arr.sort( (a, b) => a - b );
  return [arr[0], arr[arr.length-1]];
  //sort the array from lowest to highest
  //return array of [lowest, highest] via array[0] and array[array.length]
}


//**tests it passed
//see entry




//**other solutions to learn from 
//https://www.codewars.com/kata/559590633066759614000063/solutions/javascript?filter=all&sort=best_practice&invalids=false
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

//or
function minMax(arr) {
  var a = arr.sort(function(a,b) {return a-b});
  return [a[0], a[a.length-1]];
}