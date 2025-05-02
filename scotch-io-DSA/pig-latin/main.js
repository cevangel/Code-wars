function pigLatin(string){
//convert string to lowercase
let str = string.toLowerCase()
//initialize two variables
  //declar vowels array
  //declar vowel index =0
let vowels = ['a', 'e', 'i', 'o','u'];
let vowelIndex = 0;
if (/[^a-zA-Z]/.test(str)) {
  return null;
}
//if vowels.includes(str[0]), return str + way
if (vowels.includes(str[0])){
  return str + "way"
} else {
  for (let char of str){
    if (vowels.includes(char)){
      vowelIndex = str.indexOf(char);
      break; //need break here or else goes thru whole thing 
    }
  }
  return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay'
  //return statement is OUTSIDE for loop so no premature exit
} 
return str + "ay"

}

//input a string
//output: each string, 
  //if begins with vowel, we add way to the end
  //if not, keep going until find first vowel, then
  //  //move initial consonant cluster to end of word, and add "-ay" to end 

