//**prompt
//vowel count
// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//**My solution so far
function getCount(str) {
  let arr = str.split(''); //convert str to array
  let count = 0;
  for (i = 0; i < arr.length; i++){
    if (arr[i].includes("a"||"e"||"i"||"o"||"u")) { //flaw: only counted "a"
      count++
    }
  }
  return count;
}

//**tests it passed
//see prompt
//https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions

//**other solutions to learn from 

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

// str.split('') makes the string an array of characters, eg. "abcd" -> ['a', 'b', 'c', 'd']
// .filter( ...) applies the filter function ("aeiouAEIOU".includes(c)) to all the elements of the array, which is elements that are not vowels are filtered out.
// .length return the length of the filtered array.
// This is just an elementary combination of very basic methods. You should search for the documentation when you see something new, everything is available online. In most of case just type name_of_the_method/function/whatever name_of_the_language and you'll get an answer among the top results.

//or

function getCount(str) {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 }

