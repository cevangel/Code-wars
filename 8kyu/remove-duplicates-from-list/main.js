// //**prompt
//remove duplicates from list
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

//**My solution so far
function distinct(a) {
  let newArray = []; //make empty new array
  a.forEach(function(item, index, array) {
    if (!newArray.includes(item)){
      newArray.push(item)
    } else {

    }
  // ... do something with an item
});    
  return newArray;
  //for each, push to new array
  //unless it is included already 
}

//**tests it passed
//see entry




//**other solutions to learn from 
function distinct(arr) {
  let res = []; 
  
  for(let i = 0; i < arr.length; i++){
    if(!res.includes(arr[i])){
      res.push(arr[i]);
    }
}
return res;
}
//or
function distinct(a) {
  return [...new Set(a)];
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#remove_duplicate_elements_from_the_array