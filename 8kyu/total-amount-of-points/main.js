function points(games) {
  let sum = 0;  //then start comparisons 
  games.forEach((element) => {//need to grab first char for x, last char for y t
    let x = element.slice(0,1);
    let y = element.slice(-1);
    if (x > y) {sum += 3}
    else if (x < y) {sum += 0}
    else {sum += 1}
}
    );
  return sum;
}

//better to use bracket notation and descriptive noun instead of element 
const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}