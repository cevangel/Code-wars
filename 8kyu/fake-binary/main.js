// Prompt: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
  //turn string into array via split
  //for each item in array, ternary operator to do:
    //if <5, replace with 0, if not, 1
  //then join array back together
  return x.split('').map(item => item < 5 ? 0 : 1).join('')
  }