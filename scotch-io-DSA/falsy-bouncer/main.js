
/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

// Solution 1: for loop
function falsyBouncer(array) {
  //declare result array
  let result = [];
  // use for loop to push to array
  for (value of array){
    if (value){ //**WATCH OUT FOR EARLY RETURN , YOU NESETED IF STATEMENT IN FOR LOOP, RETURN RESULT AFTER FOR LOOP */
      result.push(value)
    }
  }
  return result; 
  //within the array, go thru all the values, only return a value if it's truthy, using filter method
  // return array.filter((value)=> Boolean(value))
    // Code goes here
}


// solution 2: filter

// function falsyBouncer(array) {
//   //within the array, go thru all the values, only return a value if it's truthy, using filter method
//   return array.filter((value)=> Boolean(value))
//     // Code goes here
// }


// module.exports = falsyBouncer

//NOTES: filter method is 5% slower than the for loop