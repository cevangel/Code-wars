//**prompt
// Complementary DNA
//**Task
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//**My solution
function dnaStrand(dna){
  let dnaArray = dna.split('');
  let rnaArray = dnaArray.map((x) => {
  if (x === "A"){
    return "T";
  } else if (x === "T"){
    return "A";
  } else if (x === "G"){
    return "C";
  } else if (x === "C"){
    return "G";
  } else {
    return x;
  }
});
  return rnaArray.join('');
}


//**tests it passed
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// if(typeof(dnaStrand) != "function") dnaStrand = DNAStrand

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(dnaStrand("AAAA"),"TTTT","String AAAA is")
//     assert.strictEqual(dnaStrand("ATTGC"),"TAACG","String ATTGC is")
//     assert.strictEqual(dnaStrand("GTAT"),"CATA","String GTAT is")
//   })
// })



//**other solutions to learn from 
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript
// function DNAStrand(dna) {
//   return dna.replace(/./g, function(c) {
//     return DNAStrand.pairs[c]
//   })
// }

// DNAStrand.pairs = {
//   A: 'T',
//   T: 'A',
//   C: 'G',
//   G: 'C',
// }
//OR
//  
// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }