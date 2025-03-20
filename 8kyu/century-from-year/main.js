//Do year - 1 and then return the first two characters ?
function century(year) {
  return Math.ceil(year / 100);
}

//     let yearStr = year.toString(); // Convert year to string
//     let answer = parseInt(yearStr.slice(0, -2)); // Take the first one or two characters

//     // If the year ends in "00", it's already a full century
//     return year % 100 === 0 ? answer : answer + 1;
