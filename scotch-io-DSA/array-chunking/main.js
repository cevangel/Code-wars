//**prompt
//list-filtering
// Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


//**My solution
function filter_list(l) {
  return l.filter((element) => typeof element !== 'string' );
   
   // Return a new array with the strings filtered out
 }


//**tests it passed
//see prompt


//**other solutions to learn from 
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

//or

function filter_list(l) {
  return l.filter(Number.isInteger);
}

// filter is an array method which takes a function as a parameter. The array is iterated and each element in it is tested by that parameter function. If the function returns true, the value is filtered IN, that is, included in the new returned array from the call to Array.filter.

// Number.isInteger is a function which takes one parameter and returns a boolean indicating if the parameter value is an integer or not.

// As such it can be used directly as it fits the required signature (number of parameters and return type).

// A really good source for reading about these builtin methods is Mozilla Developer Network (MDN). Array.prototype.filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter Number.isInteger: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger