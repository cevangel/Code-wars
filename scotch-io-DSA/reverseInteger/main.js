// https://web.archive.org/web/20220104182222/https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/integer-reversal
// Given an integer, return an integer that has the reverse ordering of that which was received. E.g
// reverseInteger(-123) // should return -321

//turn into an array via split('')
//.reverse it then .join(''), then return it
//append a - sign if <0

//maybe use the reduce method (acc, current as parameters)

//what if there's decimals?
   //there's none

//see reverse string, but use math.sign() and .parseInt

function reverseInteger(integer){
   function reverseString(str){
      [...str].reduce((acc, current)=> current + acc, '')
   }
   let integerString = integer.toString();
   return parseInt([...integerString].reduce((acc, current)=> current + acc, '')) * Math.sign(integer)
}




// alternate solution, not optimal
// function reverseInteger(integer){
//   return integer.toString().split('').reverse().join('')
// }