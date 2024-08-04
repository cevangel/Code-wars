//**prompt
// dna to rna conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.



//**My solution
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //take dnd string of GCAT
  //convert to array
  //forEach and turn all T->U
  //return example GCAU
  let dnaArray = dna.split('');
  let rnaArray = dnaArray.map((x) => x === "T" ? "U" : x);
  return rnaArray.join('');
}



//**tests it passed
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
//     assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
//     assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
//     });
//   })



//**other solutions to learn from 
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript
// function DNAtoRNA(dna) {
//   return dna.replaceAll('T','U');
// }