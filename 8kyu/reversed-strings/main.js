function solution(str){  //input a string
  let result = [...str].reduce((acc, letter)=> letter + acc, ""); //remember split parameters(""), and acc is first parameter in reduce
  return result //spread can be used in place of str.split('')
  //output reversed string (blank strings are blank, single letters are single )
}

// // Old solution here
// function solution(str){
//   return str.split('').reverse().join('');  
// }