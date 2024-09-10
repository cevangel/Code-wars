// //**prompt
// array plus array
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
// //**My solution 
function arrayPlusArray(arr1, arr2) {
  let result1 = arr1.reduce((sum, current) => sum + current, 0);
  let result2 = arr2.reduce((sum, current) => sum + current, 0);

  return result1 + result2;
}

//**tests it passed
//see prompt


//**other solutions to learn from 
function arrayPlusArray(arr1, arr2) { 
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur); //missed concat method
}
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/javascript