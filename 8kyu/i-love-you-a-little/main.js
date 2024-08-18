//**prompt
//I love you, a little, a lot...
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

//**My solution
function howMuchILoveYou(nbPetals) {
  if (nbPetals % 6 === 1) return "I love you";
  if (nbPetals % 6 === 2) return "a little";  
  if (nbPetals % 6 === 3) return "a lot";
  if (nbPetals % 6 === 4) return "passionately";
  if (nbPetals % 6 === 5) return "madly";
  if (nbPetals % 6 === 0) return "not at all";
    // your code
}
// //**tests it passed
//see page


//**other solutions to learn from 
//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/solutions/javascript
// First you create the phrases array, which is an ordered list, the elements are numbered from 0-5. You can refer to a phrase with phrase[index]. With the % operator you can get the remainder of a division, so (n - 1) % phrases.length is the index of the phrase. phrases.length is the length of the phrases array.
const phrases = [
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
  'not at all',
]

function howMuchILoveYou(n) {
   return phrases[(n - 1) % phrases.length] //n-1 Because of the array zero based indexing.
}

//or as object

function howMuchILoveYou(nbPetals) {
  let phrase = {    
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly"
  }
  return phrase[nbPetals%6]
}

//or
// It's the same as creating an object with keys as numbers, and taking the remainder to find the message, but condensed into one line.

const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]
//

//or

//why -1?
// "The number of petals is always greater than 0."

// That is IMO, the reason why it is done that way. Badly worded instructions. Very common problem on this site. It is not necessary to do it that way.

// To handle more than 6 petals, we use the modulo operator (%) to repeat the pattern. The modulo operation ensures that we get the remainder when dividing nbPetals by 6. For example, 7 % 6 gives 1, 8 % 6 gives 2, 9 % 6 gives 3, and so on. This way, we always map the number of petals to a range from 0 to 5.
function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
      case 1:
          return "a little";
      case 2:
          return "a lot";
      case 3:
          return "passionately";
      case 4:
          return "madly";
      case 5:
          return "not at all";
      default:
          return "I love you";
  }
}
