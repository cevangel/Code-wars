//https://www.codewars.com/kata/5601409514fc93442500010b/solutions/javascript?filter=me&sort=best_practice&invalids=false
function betterThanAverage(classPoints, yourPoints) {
  let classPointsWithYours = [...classPoints, yourPoints]
  let total = classPointsWithYours.reduce((accumulator, currentValue) => accumulator + currentValue, 0,);
  let average = total/(classPoints.length+1);
  return yourPoints > average ? true : false;
}